## Embed Documentation
# Embed the database into a custom webpage!
#### The ability to embed imports is available at `/embed` which will allow you to specify an exact import name to embed.
<style>iframe.userdbembed {margin-top:4px;border:none;width:calc(50% - 22px);aspect-ratio: 16/9;box-shadow:black 0px 3px 4px 0px;border-radius: 16px;padding: 8px 8px 0;background: #333;display:inline-block}iframe.userdbembed:nth-child(even){margin-left:8px}</style>
<div>
  <iframe src="/embed?id=lbp2-move_main_2&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D" class="userdbembed"></iframe>
  <iframe src="/embed?id=lbp3-pod&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D" class="userdbembed"></iframe>
  <iframe src="/embed?id=lbp-pod&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D" class="userdbembed"></iframe>
  <iframe src="/embed?id=homebrew-channel&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D" class="userdbembed"></iframe>
  <iframe src="/embed?id=lbp2-lb2&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D" class="userdbembed" style="resize: both;width: 684px;max-width: 684px;min-width: 300px;height: 120px;max-height: 684px;min-height: 72px;"></iframe></div>

## Parameters
#### ID
##### Required. The ID of an import is a string of text made based on the import name itself, sometimes abbreviated. IDs can also be decided by the creator, when this happens, the original id is lost and all existing links will no longer work.
#### CSS
##### An early version of this has been added, though right now it is totally bare and requires specific element ids or classes to edit.
##### Soon, a full list of variables will be added.
#### NoHREF
##### Disables automatic href redirection when visiting the page outside of an iframe
