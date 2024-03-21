#!/usr/bin/env bash

ym="2024-03"
nflm_dev="nflm_dev.md"
nflm_var="nflm_var.md"
nflm_lnk="links.md"

rm $nflm_lnk
rm $nflm_dev
rm $nflm_var

save() {
	local filename=$1
	local text=$2
	if [ -e "$nflm_lnk" ]; then
		{
		  echo "$text"
      echo ""
      cat $nflm_lnk
      echo ""
    } >> "$filename"

		rm $nflm_lnk
	fi
}

buku -e $nflm_lnk -t $ym + dev + web - fr --np
save $nflm_dev "## Web (HTML, CSS, JS, Design...)"
buku -e $nflm_lnk -t $ym + dev + web + fr --np
save $nflm_dev "En français / In French:"

buku -e $nflm_lnk -t $ym + dev + backend - fr --np
save $nflm_dev "## Backend & languages"
buku -e $nflm_lnk -t $ym + dev + backend + fr --np
save $nflm_dev "En français / In French:"

buku -e $nflm_lnk -t $ym + opensource - fr --np
save $nflm_dev "## Open source, Projects & Tools"
buku -e $nflm_lnk -t $ym + opensource + fr --np
save $nflm_dev "En français / In French:"

buku -e $nflm_lnk -t $ym + dev + various - fr --np
save $nflm_dev "## Other things, good practices, thoughts etc"
buku -e $nflm_lnk -t $ym + dev + various + fr --np
save $nflm_dev "En français / In French:"

buku -e $nflm_lnk -t $ym + science - fr --np
save $nflm_var "## Science"
buku -e $nflm_lnk -t $ym + science + fr --np
save $nflm_var "En français / In French:"

buku -e $nflm_lnk -t $ym + social - fr --np
save $nflm_var "## Social, Society, Psychology, Rights"
buku -e $nflm_lnk -t $ym + social + fr --np
save $nflm_var "En français / In French:"

buku -e $nflm_lnk -t $ym + privacy - fr --np
save $nflm_var "### Privacy"
buku -e $nflm_lnk -t $ym + privacy + fr --np
save $nflm_var "En français / In French:"

buku -e $nflm_lnk -t $ym + work - fr --np
save $nflm_var "### Work"
buku -e $nflm_lnk -t $ym + work + fr --np
save $nflm_var "En français / In French:"

buku -e $nflm_lnk -t $ym + ai - fr --np
save $nflm_var "## AI"
buku -e $nflm_lnk -t $ym + ai + fr --np
save $nflm_var "En français / In French:"

buku -e $nflm_lnk -t $ym + various - dev, fr --np
save $nflm_var "## Various"
buku -e $nflm_lnk -t $ym + various + fr - dev --np
save $nflm_var "En français / In French:"
