![DreamsUserDB Icon](/assets/images/content/9vovibpzt.png)

## Welcome to the Dreams User Database!
#### Built by [Despicable_Kee](https://indreams.me/Despicable_Kee), this database of content is a list of requested audio imports for the PS4 game called [Dreams™](https://store.playstation.com/?resolve=UP9000-CUSA08010_00-DREAMS0000000000) by [Media Molecule](https://mediamolecule.com/), and is meant to capture frozen-in-time user statistics when people make an import request (and when it's fulfilled). It has stored information such as the imp and username of users at the time, as well as a few client-sided calculations.

## A change
#### The webpage currently requires javascript and will not work without it, but in the distant future I plan to do a massive overhaul using Jekyll. A beta version of the new implementation will be available [here](https://beta.dreams.kee7702.tk/), but for now nothing is here.

## Data Endpoint
#### Responsible for making everything work on the website, while also allowing external integration.
| Path | Usage | Note | Structure |
| --- | --- | --- | --- |
| The path from the dreams.kee7702.tk domain. | Whether it's used for Users or Imports. | Just general info about the path | An example of a JSON object/array, a specific chunk of data being repeatable (chunks separated by , in an object or }, in an array) will be followed by an ellipsis. |
| /data/i/list.json | Imports | The full list of imports, used in the [imports browser](https://dreams.kee7702.tk/imports/) and to compile user pages. | [<br>- {<br>- - "userID": "#userid#",<br>- - "source": "audio database filepath",<br>- - "import_name": "Name of Import",<br>- - "import_date": "Jan 01, 1970",<br>- - "creation_id": "indreams.me path",<br>- - "img": [<br>- - - {<br>- - - - "hash": "cdn.indreams.me image path",<br>- - - - "color": "average color of image in hex"<br>- - - }<br>- - ],<br>- - "browse_id": "name-of-import-usually-abbreviated"<br>- },<br>- {...}<br>]
| /data/u/list.json | Users | The full list of users, used in the compiling of user pages as well as used to display imps in the [imports browser](https://dreams.kee7702.tk/imports/). | [<br>- {<br>- - "username": "Username",<br>- - "imphash": "cdn.indreams.me image path of user"<br>- },<br>- {...}<br>]
| /data/u/ids.json | Users | Used to map usernames to ids. Without this, user pages would not work as they do now. | {<br>- "Username": "#userid#",<br>- ...<br>}
| /data/u/#userid#.json | Users | User page data, used to compile user pages. All data visible is from this file. | [<br>- {<br>- - "importLimit": "numeric value in seconds. Defaults to 60",<br>- - "level": [<br>- - - {<br>- - - - "persona": "A full word based on possible personas in Dreams",<br>- - - - "level": "dreamer level"<br>- - - }<br>- - ],<br>- - "username": "Username",<br>- - "imphash": "cdn.indreams.me image path of user"<br>- },<br>- {<br>- - "source": "audio database filepath",<br>- - "import_name": "Name of Import",<br>- - "import_date": "Jan 01, 1970",<br>- - "creation_id": "indreams.me path",<br>- - "img": [<br>- - - {<br>- - - - "hash": "cdn.indreams.me image path",<br>- - - - "color": "average color of image in hex"<br>- - - }<br>- - ],<br>- - "browse_id": "name-of-import-usually-abbreviated"<br>- },<br>- {...}<br>]

## Import Embeds
#### The ability to embed imports is available at `/embed` which will allow you to specify an exact import name to embed. Documentation exists [here](https://dreams.kee7702.tk/embeds/)
