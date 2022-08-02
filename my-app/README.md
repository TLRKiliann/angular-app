# Angular with Routing & Services

## Install

npm install -g @angular/cli

ng new my-app --style=scss

cd my-app

`ng g c ...` replace `ng generate component ...`

ng g c list-doc
ng g c premier-doc
ng g c single-doc
ng g c header-doc
ng g c landing-page-doc

---

Create a Model :

- models/appel-model.model.ts

Create a class AppelModelService & a class ApproutingModule simply in a file :

Look at :

- app-routing.module.ts
- services/appel.service.ts

---

## Schema

> Start here: app.module => app.component.html => header + landing-page & routing

> list-doc map with `*ngFor` => premier-doc => single-doc with @Input()

> app-routing.module => landing-page.component.html

> app.component.ts & header.component.ts => nothing to do.

---

## Service & Model are called by

- list-doc
- premier-doc
- single-face

### Service

Service content data list & 3 functions for actions (btn).

- list-doc

Call data list from Service with getAllAppelModel()
list-doc.component.html => Map the list with `*ngFor`.

- premier-doc

Content functions for actions btn which are managed by Service.

- single-face

Content functions for actions btn which are managed by Service.

---

## Routing 

> app-routing.module.ts => RouterModule, Routes, NgModule

- list-doc (managed by app-routing.module.ts (with 'appelModels' value)).
- premier-doc => Router
- single-face => ActivatedRoute
- landing-page => Router
- header(html) => [routerLinkActiveOptions] + routerLink + routerLinkActive