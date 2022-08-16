## Embed Documentation
# Embed the database into a custom webpage!
#### The ability to embed imports is available at `/embed` which will allow you to specify an exact import name to embed.
<style>iframe.userdbembed {margin-top:4px;border:none;width:calc(50% - 21px);aspect-ratio: 16/9;box-shadow:black 0px 3px 4px 0px;border-radius: 16px;padding: 8px 8px 0;background: #333;display:inline-block}iframe.userdbembed:nth-child(even){margin-left:8px}</style>
<div><iframe src="/embed?id=52e127b448c370023acc1p0ilduygpc0&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D" class="userdbembed"></iframe><iframe src="/embed?id=1bfd0a2f5b25830d16f0b33bnrvnc0o0&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D" class="userdbembed"></iframe><iframe src="/embed?id=3ef95435136b920a07048h116ozxt840&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D" class="userdbembed"></iframe><iframe src="/embed?id=e2f650b8e03ac00cb8714j1cum2mil20&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D" class="userdbembed"></iframe><iframe src="/embed?id=a193daf79da1c80421af1xeo6vpmzcww&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D" class="userdbembed" style="resize: both;width: 684px;max-width: 684px;min-width: 300px;height: 120px;max-height: 684px;min-height: 72px;"></iframe></div>

## Parameters
#### ID
##### Required. The ID of an import is a data-driven string of text which is 32 characters in length, created using factors such as the import name, indreams creation id, and indreams image hash. This combination makes it nearly impossible for identical ids, and also provides a permalink as those factors will almost never change. However, due to how the id is generated, it is impossible to redirect outdated hashes, due to the fact that hashes aren't stored and are generated client-side.
#### CSS
##### An early version of this has been added, though right now it is totally bare and requires specific element ids or classes to edit.
##### Soon, a full list of variables will be added.
#### NoHREF
##### Disables automatic href redirection when visiting the page outside of an iframe
