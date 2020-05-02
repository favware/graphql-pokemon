# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 3.0.2 (2020-05-02)

### 3.0.1 (2020-04-25)


### Bug Fixes

* references and schema-ast codegen ([#180](https://github.com/favware/graphql-pokemon/issues/180)) ([e3d141a](https://github.com/favware/graphql-pokemon/commit/e3d141ae41c709d037584c9fe6ffe2a5bf9b35be)), closes [#177](https://github.com/favware/graphql-pokemon/issues/177) [#179](https://github.com/favware/graphql-pokemon/issues/179)

## 3.0.0 (2020-04-25)


### ⚠ BREAKING CHANGES

* For the TypeScript typings enums are now replaced with "const enums" and the
published bundle only includes a .d.ts file.

### Features

* disable Strict Property Initialization ([39b0983](https://github.com/favware/graphql-pokemon/commit/39b098300fa88c3b831606c62031b409b23bea9b))

## [1.8.0](https://github.com/favware/graphql-pokemon/compare/v1.7.0...v1.8.0) (2020-02-16)

### Features

- **datasets:** update datasets to latest data from showdown repo ([d72b1f4](https://github.com/favware/graphql-pokemon/commit/d72b1f4b66fed044bd85c6e5f079d237dbff4d08)), closes [#121](https://github.com/favware/graphql-pokemon/issues/121)
- update smogon tierlists ([#100](https://github.com/favware/graphql-pokemon/issues/100)) ([eb18900](https://github.com/favware/graphql-pokemon/commit/eb189008f5099db19477374b40f65cd49983a437))
- update smogon tierlists ([#101](https://github.com/favware/graphql-pokemon/issues/101)) ([274fb32](https://github.com/favware/graphql-pokemon/commit/274fb328e1e969114f2cf3edd05b6d95a7c28d9d))
- update smogon tierlists ([#102](https://github.com/favware/graphql-pokemon/issues/102)) ([da01b0e](https://github.com/favware/graphql-pokemon/commit/da01b0ee645617b5e070a13361b11b2d16dd0bff))
- update smogon tierlists ([#103](https://github.com/favware/graphql-pokemon/issues/103)) ([7284447](https://github.com/favware/graphql-pokemon/commit/7284447a9cb2b4f8aa2ee8f821f302dc22f8c0c8))

## [1.7.0](https://github.com/favware/graphql-pokemon/compare/v1.6.0...v1.7.0) (2020-01-09)

### Features

- add galarian slowpoke ([389bf09](https://github.com/favware/graphql-pokemon/commit/389bf0948ff9cb81db6b27f39928a84efb5a3792))
- update smogon tierlists ([#91](https://github.com/favware/graphql-pokemon/issues/91)) ([5aad6be](https://github.com/favware/graphql-pokemon/commit/5aad6be2f19a01afe59d24cf61d34d36a6e89c80))
- update smogon tierlists ([#98](https://github.com/favware/graphql-pokemon/issues/98)) ([a55f303](https://github.com/favware/graphql-pokemon/commit/a55f3037a8a9040fa9fc9707bf0efc545eddc131))
- update smogon tierlists ([#99](https://github.com/favware/graphql-pokemon/issues/99)) ([7846573](https://github.com/favware/graphql-pokemon/commit/78465736977af28c2d13904ba596063a3761aa14))

### Bug Fixes

- **assets:** update a lot of descriptions and other details on entries ([52ec837](https://github.com/favware/graphql-pokemon/commit/52ec837ac9d6c50c1c3d460c7f62c3d538505ef8))
- **dexservice:** fixed critical bug when searching regional forms ([8e8355d](https://github.com/favware/graphql-pokemon/commit/8e8355d6081d1c931b216429890dafb0342c2834))
- fixed gigantamax [pokemon] resolving to proper gmax forme ([8e2aa9e](https://github.com/favware/graphql-pokemon/commit/8e2aa9e51fe929b2f4a97365cae9760008d3946c))
- **pokedex:** fixed a few duplicate num/forme combinations ([0f3ae45](https://github.com/favware/graphql-pokemon/commit/0f3ae45effe6f159a1cf26a9bf8c5c7f571d6688))
- pikapapow had an invalid description ([2cb943c](https://github.com/favware/graphql-pokemon/commit/2cb943c07100634b5b3bd408a15619d113ee914a))

## [1.6.0](https://github.com/favware/graphql-pokemon/compare/v1.5.1...v1.6.0) (2020-01-02)

### Features

- **moveentry:** remove type unions for category and target ([8f8b652](https://github.com/favware/graphql-pokemon/commit/8f8b65252caeba777bcadc196d8a984ee4d99eaa))

### [1.5.1](https://github.com/favware/graphql-pokemon/compare/v1.5.0...v1.5.1) (2020-01-02)

### Bug Fixes

- fixed union typings script ([a848628](https://github.com/favware/graphql-pokemon/commit/a848628eccce6e2b3772ad7a317272d8d53aa8a9))

## [1.5.0](https://github.com/favware/graphql-pokemon/compare/v1.4.1...v1.5.0) (2020-01-02)

### Features

- update smogon tierlists ([#90](https://github.com/favware/graphql-pokemon/issues/90)) ([4b0015a](https://github.com/favware/graphql-pokemon/commit/4b0015aa741de6e08e20c067281188e278b460f1))

### [1.4.1](https://github.com/favware/graphql-pokemon/compare/v1.4.0...v1.4.1) (2020-01-01)

### Bug Fixes

- **typings:** add proper union typings to published typings ([acb04cf](https://github.com/favware/graphql-pokemon/commit/acb04cfff35565a3d3733a9e03b4b287577089fd))

## [1.4.0](https://github.com/favware/graphql-pokemon/compare/v1.3.0...v1.4.0) (2020-01-01)

### Features

- strong type move target property ([5495e84](https://github.com/favware/graphql-pokemon/commit/5495e84f749a66d1300266b7a52cff48c7db80af))
- update gen8 data ([7a2bc47](https://github.com/favware/graphql-pokemon/commit/7a2bc47a624b68effa70ae3cbd0415b9fb18c8f2))
- update smogon tierlists ([#61](https://github.com/favware/graphql-pokemon/issues/61)) ([b726be2](https://github.com/favware/graphql-pokemon/commit/b726be2f860c3c0df4caf4394959bd67fd40dd9e))
- update smogon tierlists ([#62](https://github.com/favware/graphql-pokemon/issues/62)) ([47d2575](https://github.com/favware/graphql-pokemon/commit/47d2575f0dbf64585ad97056e813f406ee9bd513))
- update smogon tierlists ([#63](https://github.com/favware/graphql-pokemon/issues/63)) ([4d1fe51](https://github.com/favware/graphql-pokemon/commit/4d1fe51fcfe09be9fe87972fee7cfab080a4312b))
- update smogon tierlists ([#64](https://github.com/favware/graphql-pokemon/issues/64)) ([13c2646](https://github.com/favware/graphql-pokemon/commit/13c2646adbc651b9fdd4a16beab3149ce287d49d))
- update smogon tierlists ([#65](https://github.com/favware/graphql-pokemon/issues/65)) ([724fe89](https://github.com/favware/graphql-pokemon/commit/724fe894220b55e7a1df64fc87b63c9a0ba82054))
- update smogon tierlists ([#68](https://github.com/favware/graphql-pokemon/issues/68)) ([6ada314](https://github.com/favware/graphql-pokemon/commit/6ada314b2af6e08cdb57b1cd06a6d2e401e9ddda))
- update smogon tierlists ([#69](https://github.com/favware/graphql-pokemon/issues/69)) ([f79614a](https://github.com/favware/graphql-pokemon/commit/f79614a13cba6b0ffee4f150b34fcef573d5c24e))
- update smogon tierlists ([#70](https://github.com/favware/graphql-pokemon/issues/70)) ([e9784d9](https://github.com/favware/graphql-pokemon/commit/e9784d95e3792e898439e78a6de634a1e6fed0cc))
- update smogon tierlists ([#73](https://github.com/favware/graphql-pokemon/issues/73)) ([7031718](https://github.com/favware/graphql-pokemon/commit/70317180bd75040d3296285ffd7731b5b72fbc87))
- update smogon tierlists ([#75](https://github.com/favware/graphql-pokemon/issues/75)) ([0ca625b](https://github.com/favware/graphql-pokemon/commit/0ca625be66bb492b4914d7e03c7e68f78c0bd830))
- update smogon tierlists ([#76](https://github.com/favware/graphql-pokemon/issues/76)) ([f45d602](https://github.com/favware/graphql-pokemon/commit/f45d602bafa53104d9f514254e48b1ced41d4a83))
- update smogon tierlists ([#77](https://github.com/favware/graphql-pokemon/issues/77)) ([869cbcb](https://github.com/favware/graphql-pokemon/commit/869cbcbf1caf612a395ab0663d48da314d8674f4))
- update smogon tierlists ([#85](https://github.com/favware/graphql-pokemon/issues/85)) ([59ea50b](https://github.com/favware/graphql-pokemon/commit/59ea50bbdb0925866172cfd9520a7f50cc900ddf))
- update smogon tierlists ([#86](https://github.com/favware/graphql-pokemon/issues/86)) ([04a2aac](https://github.com/favware/graphql-pokemon/commit/04a2aac9a2abb6486fd39c4f26d754116c0966ae))
- update smogon tierlists ([#88](https://github.com/favware/graphql-pokemon/issues/88)) ([8103c94](https://github.com/favware/graphql-pokemon/commit/8103c94fd956d218c0cf16933f624b1b337b8420))
- update smogon tierlists ([#89](https://github.com/favware/graphql-pokemon/issues/89)) ([313ded3](https://github.com/favware/graphql-pokemon/commit/313ded3054919f4ef2ebb81282c17f9e11a7364e))

### Bug Fixes

- typo in espeon species name ([e49de3f](https://github.com/favware/graphql-pokemon/commit/e49de3f6f30524e15939c2f18f1445fa1f7e7d24))

## [1.3.0](https://github.com/favware/graphql-pokemon/compare/v1.2.3...v1.3.0) (2019-11-30)

### Features

- **learnset:** expose num and species in learnset calls ([0297b62](https://github.com/favware/graphql-pokemon/commit/0297b623e41af9de9e9284fc507d3c0a33bbfbde))

### [1.2.3](https://github.com/favware/graphql-pokemon/compare/v1.2.2...v1.2.3) (2019-11-30)

### Bug Fixes

- **learnsetargs:** allow generation 8 as argument for generation ([f7c8867](https://github.com/favware/graphql-pokemon/commit/f7c8867a7c4d5e0dc3f50249f0e9917dcdcd4556))

### [1.2.2](https://github.com/favware/graphql-pokemon/compare/v1.2.1...v1.2.2) (2019-11-30)

### Bug Fixes

- fixed published file refs ([44806eb](https://github.com/favware/graphql-pokemon/commit/44806eb5a53ada4fe235c3a0bbfb7c463ee8fa0b))

### [1.2.1](https://github.com/favware/graphql-pokemon/compare/v1.2.0...v1.2.1) (2019-11-30)

## [1.2.0](https://github.com/favware/graphql-pokemon/compare/v1.1.1...v1.2.0) (2019-11-30)

### Features

- update gen 8 data ([#58](https://github.com/favware/graphql-pokemon/issues/58)) ([d012e91](https://github.com/favware/graphql-pokemon/commit/d012e917854e43c46da9f607d4ae14d1c245b006))
- update smogon tierlists ([#52](https://github.com/favware/graphql-pokemon/issues/52)) ([45efaf4](https://github.com/favware/graphql-pokemon/commit/45efaf4a288c9cae64881c1289c84de1dde74a5c))
- update smogon tierlists ([#53](https://github.com/favware/graphql-pokemon/issues/53)) ([e83fff5](https://github.com/favware/graphql-pokemon/commit/e83fff55fdda5e41794b61d4cca2c6fa51b0b653))

### [1.1.1](https://github.com/favware/graphql-pokemon/compare/v1.1.0...v1.1.1) (2019-11-26)

### Bug Fixes

- fixed published version ([bbdd1e4](https://github.com/favware/graphql-pokemon/commit/bbdd1e4b655419a959a42a62d79bca739513d79c))

## [1.1.0](https://github.com/favware/graphql-pokemon/compare/v1.0.1...v1.1.0) (2019-11-26)

### Features

- add Data for Generation 8 Pokemon ([#34](https://github.com/favware/graphql-pokemon/issues/34)) ([2b9684d](https://github.com/favware/graphql-pokemon/commit/2b9684d03f32008529d038974dcda6670263d0c2))
- add gen8 learnsets ([#47](https://github.com/favware/graphql-pokemon/issues/47)) ([29b51bf](https://github.com/favware/graphql-pokemon/commit/29b51bf08070e6128eb49de437627e549d4085d7))
- add gen8 moves ([#46](https://github.com/favware/graphql-pokemon/issues/46)) ([85606e8](https://github.com/favware/graphql-pokemon/commit/85606e8ff2f3f4df75f51d0a06e19530e52f7745))
- expose (shiny)sprite and color in learnset for discord embe… ([#45](https://github.com/favware/graphql-pokemon/issues/45)) ([7992c1c](https://github.com/favware/graphql-pokemon/commit/7992c1ca8e6075ae7227d8db780ee37688c45438))
- gen8 flavours ([#51](https://github.com/favware/graphql-pokemon/issues/51)) ([82f868c](https://github.com/favware/graphql-pokemon/commit/82f868c8bf89114a1cb1909f1adc7460681bb251))
- special(shiny)sprite field for odd-cases ([f671821](https://github.com/favware/graphql-pokemon/commit/f6718210e415ec142e8d7e0c49f84ac06fe7380a))
- update smogon tierlists ([#50](https://github.com/favware/graphql-pokemon/issues/50)) ([39dbebc](https://github.com/favware/graphql-pokemon/commit/39dbebc4a7a08b8786cfba569215a901f62bf028))
- **abilities:** add gen8 abilities ([#44](https://github.com/favware/graphql-pokemon/issues/44)) ([496e17b](https://github.com/favware/graphql-pokemon/commit/496e17bef34d8843185d075cc60dcd47d71039de))
- gen8 pokemon data ([#43](https://github.com/favware/graphql-pokemon/issues/43)) ([c0594e1](https://github.com/favware/graphql-pokemon/commit/c0594e1bd24bbf91bc57040bd6e285a326e0ff32)), closes [#40](https://github.com/favware/graphql-pokemon/issues/40)
- **dex:** add basestatstotal field ([#39](https://github.com/favware/graphql-pokemon/issues/39)) ([311f43a](https://github.com/favware/graphql-pokemon/commit/311f43a3960a5bc7ec844b3e695adaed6042beca)), closes [#38](https://github.com/favware/graphql-pokemon/issues/38)
- **items:** add gen8 data and expose item sprite ([#42](https://github.com/favware/graphql-pokemon/issues/42)) ([7f01fae](https://github.com/favware/graphql-pokemon/commit/7f01faef901f1e2de85d411fc59da5727c4c35e5)), closes [#24](https://github.com/favware/graphql-pokemon/issues/24)

### Bug Fixes

- **dexservice:** fix pokemon sprites missing .gif extension ([e9f68ed](https://github.com/favware/graphql-pokemon/commit/e9f68edb8fbd19af1e08149edc59c0e8c302cf1e)), closes [#30](https://github.com/favware/graphql-pokemon/issues/30)
- **dexservice:** fixed evos and prevo not showing in details ([b1a27a3](https://github.com/favware/graphql-pokemon/commit/b1a27a3188d84b10d19f74b756a6b8ef656599b5)), closes [#29](https://github.com/favware/graphql-pokemon/issues/29)
- **dexservice:** properly parse sprites and evos ([#36](https://github.com/favware/graphql-pokemon/issues/36)) ([d51f009](https://github.com/favware/graphql-pokemon/commit/d51f009353631933206e1ef8ce00dba09ecf3916))
- **itemservice:** add missing generationIntroduced field ([cf40973](https://github.com/favware/graphql-pokemon/commit/cf4097301a1ff53ea26ce04ab2718fb98184a1a1))

### [1.0.1](https://github.com/favware/graphql-pokemon/compare/v1.0.0...v1.0.1) (2019-11-12)

### Bug Fixes

- **dexentry:** set height and weight as floats to allow decimal values ([e62c262](https://github.com/favware/graphql-pokemon/commit/e62c262aa1d0b5c0556dfd972bdbd391d5526354))

## 1.0.0 (2019-11-12)

### Features

- 🎉 Hello GitHub ([80b1c66](https://github.com/favware/graphql-pokemon/commit/80b1c6650857a022921342c169b0f32d732c3470))
- add ability's querying ([91bad53](https://github.com/favware/graphql-pokemon/commit/91bad530307607801fa3a0afbb3b482c8821d157))
- add script for updating formats ([5127d87](https://github.com/favware/graphql-pokemon/commit/5127d87adc431ec59dde334fc3f64025ad6d78d5))
- finish up move queries ([5e404d2](https://github.com/favware/graphql-pokemon/commit/5e404d28910be56762cc83efa1ac403b43eaaf2d)), closes [#7](https://github.com/favware/graphql-pokemon/issues/7)
- firebase hosting ([3f9e3da](https://github.com/favware/graphql-pokemon/commit/3f9e3da389e2b18345bf0d6d7f5935216c55bcfc))
- learnset query ([db6465e](https://github.com/favware/graphql-pokemon/commit/db6465ea7789f015558513f8d671a9129e659e39)), closes [#6](https://github.com/favware/graphql-pokemon/issues/6)
- type matchup queries ([0eadb20](https://github.com/favware/graphql-pokemon/commit/0eadb20385ccc7ac48255691799b85e86399b431)), closes [#8](https://github.com/favware/graphql-pokemon/issues/8)
- update data files ([1b2f3c1](https://github.com/favware/graphql-pokemon/commit/1b2f3c1adb401e3a99e731cdbcb12f3596550c7e))
- update smogon formats ([01b7a0c](https://github.com/favware/graphql-pokemon/commit/01b7a0ce227232a249600112bdd73bcbb5725338))
- implement pokemon details and dex entries ([786b539](https://github.com/favware/graphql-pokemon/commit/786b53926e0c18e4ae1dfa3a638681c7f676539f)), closes [#2](https://github.com/favware/graphql-pokemon/issues/2) [#3](https://github.com/favware/graphql-pokemon/issues/3)
- subfield selection + better args + prep move queries ([06ec225](https://github.com/favware/graphql-pokemon/commit/06ec2251271b1fd908f744a2105b834ebe1e4071)), closes [#14](https://github.com/favware/graphql-pokemon/issues/14)
- **query:** add item query endpoint ([f920694](https://github.com/favware/graphql-pokemon/commit/f92069438774a85b51261910969c3a50b2fedf4c)), closes [#5](https://github.com/favware/graphql-pokemon/issues/5)

### Bug Fixes

- better firebase hosting ([bf1da3a](https://github.com/favware/graphql-pokemon/commit/bf1da3ae44f1426a9e8da63a6c43384af9dc8217))
- fix building ([65617e0](https://github.com/favware/graphql-pokemon/commit/65617e03386668f77f0af6084df85e653edee107))
- fixed ability,item by fuzzy ([0d134ea](https://github.com/favware/graphql-pokemon/commit/0d134ea792d3b7bfa8f430a5cfc4c640c174b506))
- fixed firebase deploy ([ea47780](https://github.com/favware/graphql-pokemon/commit/ea47780a5cc0749c2c4514515987c6964d273b93))
