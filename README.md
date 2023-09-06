# obgOpg1
SWA aflevering

## Øvelse 1
Done

## Øvelse 2

Endpoint: https://api.dropboxapi.com/2/files/create_folder_v2

Body:
````
{
"autorename": false,
"path": "/MappeTest1"
}
````

## Øvelse 3

Endpoint:  https://api.dropboxapi.com/2/files/get_metadata

````{
"include_deleted": false,
"include_has_explicit_shared_members": false,
"include_media_info": false,
"path": "/MappeTest1"
}
````

## Øvelse 4

Endpoint:     https://content.dropboxapi.com/2/files/upload

i headeren skal man huske at tilføje Dropbox-API-Arg, og tilføje ens json data.
````
{
"autorename": false,
"mode": "add",
"mute": false,
"path": "/nskDB/MappeTest1/asdf.txt",
"strict_conflict": false
}
````

## Øvelse 5
Endpoint: https://api.dropboxapi.com/2/files/delete_v2

````
{
    "path": "/nskDB/MappeTest1/asdf.txt"
}
````

## Øvelse 7
Endpoint:    https://api.dropboxapi.com/2/files/search_v2

````
{
    "match_field_options": {
        "include_highlights": false
    },
    "options": {
        "file_status": "active",
        "filename_only": false,
        "max_results": 20,
        "path": "/nskDB"
    },
    "query": "test"
}
````

## Øvelse 8
Endpoint:     https://api.dropboxapi.com/2/files/move_v2

````
{
    "allow_ownership_transfer": false,
    "allow_shared_folder": false,
    "autorename": false,
    "from_path": "/nskDB/MappeTest1",
    "to_path": "/nskDB/TestMappe"
}
````

## Øvelse 9
Endpoint:     https://api.dropboxapi.com/2/files/copy_v2

````
{
    "allow_ownership_transfer": false,
    "allow_shared_folder": false,
    "autorename": false,
    "from_path": "/Homework/math/matrices.txt",
    "to_path": "/nskDB/Test1"
}
````

## Øvelse 10
