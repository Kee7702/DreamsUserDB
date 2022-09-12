## Embed Documentation
# Embed the database into a custom webpage!
#### The ability to embed imports is available at `/embed` which will allow you to specify an exact import name to embed.
<style>iframe.userdbembed {margin-top:4px;border:none;width:calc(50% - 22px);aspect-ratio: 16/9;box-shadow:black 0px 3px 4px 0px;border-radius: 16px;padding: 8px 8px 0;background: #333;display:inline-block}iframe.userdbembed:nth-child(even){margin-left:8px}</style>
<div>
  <iframe src="/embed?id=52e127b448c370023acc23acc&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D" class="userdbembed"></iframe>
  <iframe src="/embed?id=1bfd0a2f5b25830d16f0d16f0&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D" class="userdbembed"></iframe>
  <iframe src="/embed?id=3ef95435136b920a0704a0704&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D" class="userdbembed"></iframe>
  <iframe src="/embed?id=e2f650b8e03ac00cb871cb871&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D" class="userdbembed"></iframe>
  <iframe src="/embed?id=a193daf79da1c80421af421af&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D" class="userdbembed" style="resize: both;width: 684px;max-width: 684px;min-width: 300px;height: 120px;max-height: 684px;min-height: 72px;"></iframe></div>

## Parameters
#### ID
##### Required. The ID of an import is a data-driven string of text which is around 20 characters in length, created using factors such as the import name, indreams creation id, and indreams image hash. This combination makes it nearly impossible for identical ids, and also provides a permalink as those factors will almost never change. However, if a creator wants a namespaced id, the prior ID will be lost and replaced with a human readable ID.
#### CSS
##### An early version of this has been added, though right now it is totally bare and requires specific element ids or classes to edit.
##### Soon, a full list of variables will be added.
#### NoHREF
##### Disables automatic href redirection when visiting the page outside of an iframe
