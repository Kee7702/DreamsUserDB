## Embed Documentation
# Embed the database into a custom webpage!
#### The ability to embed imports is available at `/embed` which will allow you to specify an exact import name to embed.
<style>iframe.userdbembed {margin:4px;border:none;width:320px;aspect-ratio:16/9;box-shadow:black 0 3px 4px 0;border-radius:10px;display:inline-block}</style>
<div>
  <div class="home-content-container">
    <iframe src="/embed?id=lbp2-move_main_2" class="userdbembed"></iframe>
    <iframe src="/embed?id=lbp3-pod" class="userdbembed"></iframe>
    <iframe src="/embed?id=lbp-pod" class="userdbembed"></iframe><iframe src="/embed?id=homebrew-channel" class="userdbembed"></iframe>
  </div>
  <iframe src="/embed?id=lbp2-lb2" class="userdbembed" style="resize:both;width:100%;max-width:calc(100% - 8px);min-width:300px;height:120px;max-height:684px;min-height:72px"></iframe>
</div>

## Parameters
#### ID
##### Required. The ID of an import is a string of text made based on the import name itself, sometimes abbreviated. IDs can also be decided by the creator, when this happens, the original id is lost and all existing links will no longer work.
#### CSS
##### An early version of this has been added, though right now it is totally bare and requires specific element ids or classes to edit.
##### Soon, a full list of variables will be added.

## About legacy IDs
##### Now that ids are all namespaced, they will never be changed, however this also means that any old ids were made originally made invalid after this change. Old ids were generated using a combination of the import title, the creation id, the image hash, and a few more key elements. These were all thrown into an algorithm that generated a unique token that would for certain never show on any other import. Old ids can still be used, though they've lost some of their original information; I'm hoping this won't affect anything though.
##### Even though support for legacy ids has been added back, certain imports have at least 1 element changed since they were added to the database. This very issue is why I moved away from the legacy id system and instead moved to namespaced ids.
#### As of May 25th, 2023, legacy IDs are no longer supported. Some traces of them may remain in the code, however it shoud be impossible to use them to browse the import database.

## Using the import name instead of an ID
##### As a part of the legacy query update, the name parameter is also back. What you do for this parameter is to literally copy the exact name of imports.
