# SCTracks

Command-line tool for retrieving titles and URIs of [SoundCloud](http://soundcloud.com) users' uploaded tracks.

URIs can be copied over to a browser, stream URIs can be passed e.g. to [mplayer](http://mplayerhq.hu) in the command-line.

## Requirements
* Installed Node.js.

## Usage
`$ node sctracks.js [SoundCloud username]`

## Development status
The development is in *experimental status*. Also, these are my first lines of Node.js code I have ever written, so please be gentle. ;)

## Examples

`$ node sctracks.js arminvanbuuren`
    
    ==> 2013/04/11 | "Armin van Buuren - Intense (feat. Miri Ben-Ari) [Preview]"
    ... URI: http://soundcloud.com/arminvanbuuren/armin-van-buuren-intense-feat
    ... Stream URI: http://api.soundcloud.com/tracks/87389350/stream?client_id=e59d1966f5f19e4c3177aef214ed2b19
    
    ==> 2013/04/09 | "Armin van Buuren - Who's Afraid Of 138?! [Live From ASOT600 Den Bosch]"
    ... URI: http://soundcloud.com/arminvanbuuren/armin-van-buuren-whos-afraid
    ... Stream URI: http://api.soundcloud.com/tracks/87073782/stream?client_id=e59d1966f5f19e4c3177aef214ed2b19
    
    ==> 2013/04/04 | "Armin van Buuren feat. Trevor Guthrie - This Is What It Feels Like (W&W Remix) Live@ASOT600,New York"
    ... URI: http://soundcloud.com/arminvanbuuren/avbthiswwnyc
    ... Stream URI: http://api.soundcloud.com/tracks/86331645/stream?client_id=e59d1966f5f19e4c3177aef214ed2b19
    
    ==> 2013/03/19 | "Armin van Buuren feat. Trevor Guthrie - This Is What It Feels Like (G.O. Remix) Live@ASOT600, Beirut"
    ... URI: http://soundcloud.com/arminvanbuuren/armin-van-buuren-feat-trevor
    ... Stream URI: http://api.soundcloud.com/tracks/83943994/stream?client_id=e59d1966f5f19e4c3177aef214ed2b19
    
    ==> 2013/02/06 | "Armin van Buuren presents Gaia – Humming The Lights"
    ... URI: http://soundcloud.com/arminvanbuuren/armin-van-buuren-presents-gaia
    ... Stream URI: http://api.soundcloud.com/tracks/78089661/stream?client_id=e59d1966f5f19e4c3177aef214ed2b19
    
    [...]


`$ node sctracks.js arminvanbuuren | grep -A2 "Trevor" | less`

    ==> 2013/04/04 | "Armin van Buuren feat. Trevor Guthrie - This Is What It Feels Like (W&W Remix) Live@ASOT600,New York"
    ... URI: http://soundcloud.com/arminvanbuuren/avbthiswwnyc
    ... Stream URI: http://api.soundcloud.com/tracks/86331645/stream?client_id=e59d1966f5f19e4c3177aef214ed2b19
    --
    ==> 2013/03/19 | "Armin van Buuren feat. Trevor Guthrie - This Is What It Feels Like (G.O. Remix) Live@ASOT600, Beirut"
    ... URI: http://soundcloud.com/arminvanbuuren/armin-van-buuren-feat-trevor
    ... Stream URI: http://api.soundcloud.com/tracks/83943994/stream?client_id=e59d1966f5f19e4c3177aef214ed2b19
