# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.1.0](https://github.com/favware/graphql-pokemon/compare/v1.0.1...v1.1.0) (2019-11-26)


### Features

* add Data for Generation 8 Pokemon ([#34](https://github.com/favware/graphql-pokemon/issues/34)) ([2b9684d](https://github.com/favware/graphql-pokemon/commit/2b9684d03f32008529d038974dcda6670263d0c2))
* add gen8 learnsets ([#47](https://github.com/favware/graphql-pokemon/issues/47)) ([29b51bf](https://github.com/favware/graphql-pokemon/commit/29b51bf08070e6128eb49de437627e549d4085d7))
* add gen8 moves ([#46](https://github.com/favware/graphql-pokemon/issues/46)) ([85606e8](https://github.com/favware/graphql-pokemon/commit/85606e8ff2f3f4df75f51d0a06e19530e52f7745))
* expose (shiny)sprite and color in learnset for discord embe… ([#45](https://github.com/favware/graphql-pokemon/issues/45)) ([7992c1c](https://github.com/favware/graphql-pokemon/commit/7992c1ca8e6075ae7227d8db780ee37688c45438))
* gen8 flavours ([#51](https://github.com/favware/graphql-pokemon/issues/51)) ([82f868c](https://github.com/favware/graphql-pokemon/commit/82f868c8bf89114a1cb1909f1adc7460681bb251))
* special(shiny)sprite field for odd-cases ([f671821](https://github.com/favware/graphql-pokemon/commit/f6718210e415ec142e8d7e0c49f84ac06fe7380a))
* update smogon tierlists ([#50](https://github.com/favware/graphql-pokemon/issues/50)) ([39dbebc](https://github.com/favware/graphql-pokemon/commit/39dbebc4a7a08b8786cfba569215a901f62bf028))
* **abilities:** add gen8 abilities ([#44](https://github.com/favware/graphql-pokemon/issues/44)) ([496e17b](https://github.com/favware/graphql-pokemon/commit/496e17bef34d8843185d075cc60dcd47d71039de))
* gen8 pokemon data ([#43](https://github.com/favware/graphql-pokemon/issues/43)) ([c0594e1](https://github.com/favware/graphql-pokemon/commit/c0594e1bd24bbf91bc57040bd6e285a326e0ff32)), closes [#40](https://github.com/favware/graphql-pokemon/issues/40)
* **dex:** add basestatstotal field ([#39](https://github.com/favware/graphql-pokemon/issues/39)) ([311f43a](https://github.com/favware/graphql-pokemon/commit/311f43a3960a5bc7ec844b3e695adaed6042beca)), closes [#38](https://github.com/favware/graphql-pokemon/issues/38)
* **items:** add gen8 data and expose item sprite ([#42](https://github.com/favware/graphql-pokemon/issues/42)) ([7f01fae](https://github.com/favware/graphql-pokemon/commit/7f01faef901f1e2de85d411fc59da5727c4c35e5)), closes [#24](https://github.com/favware/graphql-pokemon/issues/24)


### Bug Fixes

* **dexservice:** fix pokemon sprites missing .gif extension ([e9f68ed](https://github.com/favware/graphql-pokemon/commit/e9f68edb8fbd19af1e08149edc59c0e8c302cf1e)), closes [#30](https://github.com/favware/graphql-pokemon/issues/30)
* **dexservice:** fixed evos and prevo not showing in details ([b1a27a3](https://github.com/favware/graphql-pokemon/commit/b1a27a3188d84b10d19f74b756a6b8ef656599b5)), closes [#29](https://github.com/favware/graphql-pokemon/issues/29)
* **dexservice:** properly parse sprites and evos ([#36](https://github.com/favware/graphql-pokemon/issues/36)) ([d51f009](https://github.com/favware/graphql-pokemon/commit/d51f009353631933206e1ef8ce00dba09ecf3916))
* **itemservice:** add missing generationIntroduced field ([cf40973](https://github.com/favware/graphql-pokemon/commit/cf4097301a1ff53ea26ce04ab2718fb98184a1a1))

### [1.0.1](https://github.com/favware/graphql-pokemon/compare/v1.0.0...v1.0.1) (2019-11-12)


### Bug Fixes

* **dexentry:** set height and weight as floats to allow decimal values ([e62c262](https://github.com/favware/graphql-pokemon/commit/e62c262aa1d0b5c0556dfd972bdbd391d5526354))

## 1.0.0 (2019-11-12)


### Features

* 🎉  Hello GitHub ([80b1c66](https://github.com/favware/graphql-pokemon/commit/80b1c6650857a022921342c169b0f32d732c3470))
* add ability's querying ([91bad53](https://github.com/favware/graphql-pokemon/commit/91bad530307607801fa3a0afbb3b482c8821d157))
* add script for updating formats ([5127d87](https://github.com/favware/graphql-pokemon/commit/5127d87adc431ec59dde334fc3f64025ad6d78d5))
* finish up move queries ([5e404d2](https://github.com/favware/graphql-pokemon/commit/5e404d28910be56762cc83efa1ac403b43eaaf2d)), closes [#7](https://github.com/favware/graphql-pokemon/issues/7)
* firebase hosting ([3f9e3da](https://github.com/favware/graphql-pokemon/commit/3f9e3da389e2b18345bf0d6d7f5935216c55bcfc))
* learnset query ([db6465e](https://github.com/favware/graphql-pokemon/commit/db6465ea7789f015558513f8d671a9129e659e39)), closes [#6](https://github.com/favware/graphql-pokemon/issues/6)
* type matchup queries ([0eadb20](https://github.com/favware/graphql-pokemon/commit/0eadb20385ccc7ac48255691799b85e86399b431)), closes [#8](https://github.com/favware/graphql-pokemon/issues/8)
* update data files ([1b2f3c1](https://github.com/favware/graphql-pokemon/commit/1b2f3c1adb401e3a99e731cdbcb12f3596550c7e))
* update smogon formats ([01b7a0c](https://github.com/favware/graphql-pokemon/commit/01b7a0ce227232a249600112bdd73bcbb5725338))
* implement pokemon details and dex entries ([786b539](https://github.com/favware/graphql-pokemon/commit/786b53926e0c18e4ae1dfa3a638681c7f676539f)), closes [#2](https://github.com/favware/graphql-pokemon/issues/2) [#3](https://github.com/favware/graphql-pokemon/issues/3)
* subfield selection + better args + prep move queries ([06ec225](https://github.com/favware/graphql-pokemon/commit/06ec2251271b1fd908f744a2105b834ebe1e4071)), closes [#14](https://github.com/favware/graphql-pokemon/issues/14)
* **query:** add item query endpoint ([f920694](https://github.com/favware/graphql-pokemon/commit/f92069438774a85b51261910969c3a50b2fedf4c)), closes [#5](https://github.com/favware/graphql-pokemon/issues/5)


### Bug Fixes

* better firebase hosting ([bf1da3a](https://github.com/favware/graphql-pokemon/commit/bf1da3ae44f1426a9e8da63a6c43384af9dc8217))
* fix building ([65617e0](https://github.com/favware/graphql-pokemon/commit/65617e03386668f77f0af6084df85e653edee107))
* fixed ability,item by fuzzy ([0d134ea](https://github.com/favware/graphql-pokemon/commit/0d134ea792d3b7bfa8f430a5cfc4c640c174b506))
* fixed firebase deploy ([ea47780](https://github.com/favware/graphql-pokemon/commit/ea47780a5cc0749c2c4514515987c6964d273b93))
