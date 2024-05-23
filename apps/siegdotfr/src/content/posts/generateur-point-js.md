---
title: "J'ai enfin utilisé un générateur en JavaScript"
description: Le code, des fois c'est quand même mieux quand c'est compliqué pour pas grand chose!
date: 2024-03-22T00:00:00.000Z
updatedAt: 2024-03-22T00:00:00.000Z
image: ../../../public/assets/generateurs_xl-1024-v1-0.png
imageDescription: >-
  Générée avec SDXL 1.0 en utilisant le code de la fonction avec un générateur.
  C'est n'importe quoi.
tags:
  - javascript
---

Coucou,

Au boulot on utilise [BigQuery](https://cloud.google.com/bigquery?hl=fr), et j'avais besoin de faire la chose suivante :

- créer une table temporaire
- envoyer des données dedans
- fusionner cette table avec la vraie table
- supprimer la table temporaire

J'avais donc quelques fonctions telles que celles-ci, qui en vrai faisaient les actions décrites :

```javascript
async function createTable(id) {
  console.log("createTable", id);
}

async function saveToBigQuery(id, data) {
  console.log("saveToBigQuery", id, data);
}

async function mergeTables(from, to) {
  console.log("mergeTables", from, to);
}

async function deleteTable(id) {
  console.log("deleteTable", id);
}
```

Ainsi que les données suivantes :

```javascript
const data = [
  {
    name: "Siegfried",
  },
];
```

Et donc pour enchaîner tout ça, la petite routine suivante :

```javascript
let step = "create table";
try {
  await createTable("table1");
  step = "save to bigquery";
  await saveToBigQuery("table1", data);
  step = "merge tables";
  await mergeTables("table1", "table2");
  step = "delete table";
  await deleteTable("table1");
} catch (e) {
  console.log(e, step);
}
```

Ça fait le boulot, mais je n'étais pas emballé par le `let step = "..."` et la répétition du `step = "..."`. J'ai donc osé :

```javascript
function* getMergeSteps(fromTable, toTable, items) {
  yield createTable(fromTable);
  yield "create table";
  yield saveToBigQuery(fromTable, items);
  yield "save data";
  yield mergeTables(fromTable, toTable);
  yield "merge data";
  yield deleteTable(fromTable);
  yield "delete table";
}

const steps = getMergeSteps("table1", "table2", data);
try {
  for (const leStep of steps) {
    await leStep; // If this throws an error, the `steps.next().value` from the log in the catch will retrieve the current step.
    steps.next();
  }
} catch (err) {
  console.log(err, steps.next().value);
}
```

Ça fait aussi le boulot aussi !
