---
date: "2013-04-05T00:00:00.000Z"
updatedAt: "2021-05-23T13:39:09.065Z"
title: "Vagrant, Apache, Tomcat, OpenCms"
description: "This is mostly a vagrant guide for me, which may be useful for somebody."
tags: []
---

## intro

Hi all,
This is mostly a vagrant guide for me, which may be useful for somebody.
Don't be mad if there is something wrong...

## install

First, you need to install [virtualbox](https://www.virtualbox.org/).
Then go to [vagrant home page](http://www.vagrantup.com/) and install get the last version of the software.

## config

To start an environment :

```shell
vagrant init precise32 http://files.vagrantup.com/precise32.box
vagrant up
```

This will create a virtual machine based on Ubuntu Precise Pangolin (12.04 LTS 32bits).

You can ssh the box, the user is `vagrant` and the password is also `vagrant`.

## opencms !

I actually used this for an [OpenCms](http://www.opencms.org/) project, so I'll explain here the steps to get a working installation of OpenCms (with Apache, Tomcat etc.)

### apt-get all the things !

Run the following commands :

- `sudo apt-get update` retrieves the last packages informations
- `sudo apt-get install vim vim-nox` installs vim (because it rocks)
- `sudo apt-get install openjdk-7-jdk` installs java 7
- `sudo apt-get install mysql-server` installs mysql (it asks for a password for the root user)
- `sudo apt-get install tomcat7 tomcat7-admin` installs tomcat7

That's all we need for now !

### tomcat configuration

Edit the tomcat configuration with `sudo vi /etc/tomcat7/server.xml` to add:

```xml
<Host name="leproject.ehret" appBase="/home/vagrant/www" >
  <Logger className="org.apache.catalina.logger.FileLogger" directory="logs" prefix="leproject.ehret." suffix=".log" timestamp="true" />
  <Context path="/manager" privileged="true" docBase="/usr/share/tomcat7-admin/manager"></Context>
  <Context path="" docBase="" />
</Host>
```

### mysql configuration

Edit the mysql configuration with `sudo vi /etc/mysql/my.cnf` to change this line :

```properties
max_allowed_packet = 64M
```

The default value is 16M, which means you can't upload files bigger than 16M into OpenCms. 64M is a large but reasonable value.

Connect to mysql with `mysql -u root -p` and enter your password.

Create a database for your new project ([reference](http://dev.mysql.com/doc/refman/5.1/en/creating-database.html)):

```sql
CREATE DATABASE menagerie;
```

Create a user with nice permissions for this database ([reference](http://dev.mysql.com/doc/refman/5.0/en/adding-users.html)):

```sql
CREATE USER 'monty'@'localhost' IDENTIFIED BY 'some_pass';
GRANT ALL PRIVILEGES ON *.* TO 'monty'@'localhost' WITH GRANT OPTION;
```

It's time to restart mysql with `sudo /etc/init.d/mysql restart`

### opencms, finally !

Create a "www" folder with `mkdir www`, then `cd www` to go into it and run :

```shell
wget http://www.opencms.org/downloads/opencms/opencms_8.5.1.zip
```

This is the current version, check the link on [OpenCms](http://www.opencms.org/) home page.
Unzip the file.

It's time to restart tomcat with `sudo /etc/init.d/tomcat7 restart`. It will deploy the opencms.war file.

Run `sudo vi /etc/hosts` to add:

- `127.0.0.1 back-leproject.ehret`
- `127.0.0.1 leproject.ehret`

Run `sudo chmod -R 777 opencms` in the "www" folder to give full right to Tomcat (it's a development platform, so who cares ?).

You can go now to http://back-leproject.ehret:8080/opencms/setup to install OpenCms.
Once installed, you can go to http://back-leproject.ehret:8080/opencms/opencms/system/login with user name `Admin` and password `admin`.

## i can has moar ?

Yes. We're going to set nicer urls and hide tomcat behind apache.

### opencms configuration

Run the following commands :

- `cd ~/www` to go in the folder where OpenCms is installed
- `mv opencms ROOT` to rename opencms root folder

While you are in the "www" folder, edit the opencms configuration file with `vi ROOT/WEB-INF/config/opencms-system.xml` and update the following:

```xml
<sites>
  <workplace-server>http://back-leproject.ehret</workplace-server>
  <default-uri>/sites/project/</default-uri>
  <shared-folder>/shared/</shared-folder>
  <site server="http://leproject.ehret" uri="/sites/project/"/>
</sites>
```

This will enable the "http://back-leproject.ehret" url to reach the OpenCms Workplace, and a "http://leproject.ehret" url for the frontend.

If you are still in the "www" folder, edit another opencms configuration file with `vi ROOT/WEB-INF/config/opencms-importexport.xml` and update the following:

- from `<vfs-prefix>${CONTEXT_NAME}${SERVLET_NAME}</vfs-prefix>`
- to `<vfs-prefix></vfs-prefix>`

### apache / tomcat connection

We don't want to use the 8080 port !
First, install apache2 and mod_jk :

- `sudo apt-get install apache2` installs apache
- `sudo apt-get install libapache2-mod-jk` installs apache / tomcat connector

### tomcat configuration

Edit the tomcat configuration with `sudo vi /etc/tomcat7/server.xml` and uncomment the following line:

```xml
<Connector port="8009" protocol="AJP/1.3" redirectPort="8443" />
```

Also, update the server declaration like :

```xml
<Host name="back-leproject.ehret" appBase="/home/vagrant/www" unpackWARs="true" autoDeploy="false" deployOnStartup="false">
  <Logger className="org.apache.catalina.logger.FileLogger" directory="logs" prefix="leproject.ehret." suffix=".log" timestamp="true" />
  <Context path="/manager" privileged="true" docBase="/usr/share/tomcat7-admin/manager"></Context>
  <Context path="" docBase="ROOT" />
  <Alias>leproject.ehret</Alias>
</Host>
```

### apache configuration

#### worker

You can edit the worker properties with `sudo vi /etc/libapache2-mod-jk/workers.properties`.
I actually only changed the path to tomcat and the jvm.
The default name is "ajp13_worker".

#### virtualhost

Create a new file with `sudo vi /etc/apache2/sites-available/leproject.ehret` with the following content:

```xml
<VirtualHost *:80>
  ServerAdmin siegfried@ehret.me
  ServerName back-project.ehret
  ServerAlias project.ehret

  DocumentRoot /home/vagrant/www/

  # Possible values include: debug, info, notice, warn, error, crit,
  # alert, emerg.
  LogLevel warn

  CustomLog ${APACHE_LOG_DIR}/access.log combined

  JkMount /opencms/* ajp13_worker
  JkMount /export/* ajp13_worker
  JkMount /resources/* ajp13_worker
  JkMount /manager/* ajp13_worker

  RewriteEngine On

  RewriteCond %{REQUEST_URI} \/export\/(.*)
  RewriteCond /home/vagrant/www/ROOT%{REQUEST_URI} -f
  RewriteRule .* /ROOT%{REQUEST_URI} [PT]

  RewriteCond %{REQUEST_URI} !^/opencms/.*$
  RewriteCond %{REQUEST_URI} !^/export/.*$
  RewriteCond %{REQUEST_URI} !^/resources/.*$
  RewriteCond %{REQUEST_URI} !^/stats/.*$
  RewriteCond %{REQUEST_URI} !^/manager/.*$
  RewriteRule .* /opencms%{REQUEST_URI} [QSA,PT]
</VirtualHost>
```

Then run `cd /etc/apache2/sites-enabled/` and `sudo ln -s ../sites/available/leproject.ehret` to enable the site in apache.

## finally...

- Restart tomcat with `sudo /etc/init.d/tomcat7 restart`
- Restart apache with `sudo /etc/init.d/apache2 restart`

You should be able to reach the back office at [http://back-leproject.ehret/system/login](http://back-leproject.ehret/system/login) and the front at [http://leproject.ehret/](http://leproject.ehret/).
