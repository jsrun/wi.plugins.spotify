/**
 *                       (   (           (                                
 *   (  (             ) )\ ))\ )        )\ )              )   (          
 *   )\))(   '  (  ( /((()/(()/(  (    (()/(           ( /((  )\ ) (     
 *  ((_)()\ )  ))\ )\())/(_))(_)) )\    /(_))`  )   (  )\())\(()/( )\ )  
 *  _(())\_)()/((_|(_)\(_))(_))_ ((_)  (_))  /(/(   )\(_))((_)/(_)|()/(  
 *  \ \((_)/ (_)) | |(_)_ _||   \| __| / __|((_)_\ ((_) |_ (_|_) _|)(_)) 
 *   \ \/\/ // -_)| '_ \| | | |) | _|  \__ \| '_ \) _ \  _|| ||  _| || | 
 *    \_/\_/ \___||_.__/___||___/|___| |___/| .__/\___/\__||_||_|  \_, | 
 *                                          |_|                    |__/      
 *                                                                                                              
 *  @author André Ferreira <andrehrf@gmail.com>
 *  @license MIT
 *  @see https://www.npmjs.com/package/passport-spotify
 *  @see https://www.npmjs.com/package/spotify-web-api-node
 *  @see https://developer.spotify.com/web-api/
 */

"use strict";

let fs = require("fs"),
    SpotifyWebApi = require('spotify-web-api-node'),
    SpotifyStrategy = require('passport-spotify').Strategy,
    TemplateEngine = require(__dirname + "/../../.core/wi.core.template.js");

module.exports = (_this) => {        
    _this.settings.addSettingItem("Plugins", "Spotify", "spotify.user", "Username", "text", "", null, "webide.settings.set");
    _this.settings.addSettingItem("Plugins", "Spotify", "spotify.pass", "Password", "password", "", null, "webide.settings.set");
    
    _this.navbar.addWidget({
        id: "spotify",
        tpl: TemplateEngine(__dirname + "/wi.plugins.spotify.widget.ejs").seti18n(_this.i18n).render(),
        css: [__dirname + "/wi.plugins.spotify.widget.css"],
        js: [__dirname + "/wi.plugins.spotify.widget.js"],
    });
};