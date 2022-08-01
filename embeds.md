# Embed the database into a custom webpage!
#### The ability to embed imports is available at `/embed` which will allow you to specify an exact import name to embed.
<style>iframe.userdbembed {margin-top:4px;border:none;width:calc(50% - 21px);aspect-ratio: 16/9;box-shadow:black 0px 3px 4px 0px;border-radius: 20px;padding: 8px;background: #333;display:inline-block}iframe.userdbembed:nth-child(even){margin-left:4px}</style>
<iframe src="/embed?name=Homebrew%20Channel%20Theme&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D.plyr--audio%7Bmargin-top:-36px!important%7Dhtml%7Bbackground:%23333!important%7D" class="userdbembed"></iframe>
<iframe src="/embed?name=LittleBigPlanet%202%20Move%20Pack%20-%20move_main_2&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D.plyr--audio%7Bmargin-top:-36px!important%7Dhtml%7Bbackground:%23333!important%7D" class="userdbembed"></iframe>
<iframe src="/embed?player=thin&amp;name=LittleBigPlanet%202%20-%20The%20Pod&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D.plyr--audio%7Bmargin-top:-36px!important%7Dhtml%7Bbackground:%23333!important%7D" class="userdbembed" style="aspect-ratio:10/3"></iframe>
<iframe src="/embed?player=thin&amp;name=LittleBigPlanet%203%20Alpha%20-%20The%20Pod&amp;css=a.global-post-label%7Bbackground:%23333!important%7D.plyr--audio%20.plyr__controls%7Bpadding:8px!important%7D.plyr--audio%7Bmargin-top:-36px!important%7Dhtml%7Bbackground:%23333!important%7D" class="userdbembed" style="aspect-ratio:10/3"></iframe>
#### At this time this is all the embed script can do, but there are future planned implementations.
### Parameters
#### Name
#### Required, is the exact name of the import you wish to embed. It's exactly the same as the way `/imports` works so you can just copy the value from there.
#### CSS
#### An early version of this has been added, though right now it is totally bare and requires specific element ids or classes to edit.
#### Soon, a full list of variables will be added.
#### Player
#### Defauls to full player, can be set to `thin` which is a 10:3 version of the normal 16:9 embed
