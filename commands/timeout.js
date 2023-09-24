module.exports = [{
    name: "timeout",
    code: `
                $timeoutMember[$guildID;$findUser[$mentioned[1;false];false];$getVar[timeouttime];false]
                    $title[Timeout]
                        $description[
                                    User: <@$findUser[$mentioned[1;false];false]>

                                            Mod: <@$authorID>

                                                    Reason: $noMentionMessage

                        ]
                            $color[$getVar[color]]
                                $onlyForRoles[$getVar[ownerrole];hey bro you are not owner{options:{ephemeral}}
                                `

}, {
    name: "timeout-adcanced",
    code: `
$setUserVar[reason;$noMentionMessage]
$setUserVar[tm;$findUser[$mentioned[1;false];false];$authorID]
$addButton[1;1 day;success;1d;false;⏲️]
$addButton[1;30 min;success;30m;false;⏳]
$addButton[1;10 min;success;10m;false;⌛]
$title[Timeout]
$description[
    Select A Option For Time Out User: <@$findUser[$mentioned[1;false];false]>
]
$color[$getVar[color]]

        $onlyForRoles[$getVar[ownerrole];hey bro you are not owner{options:{ephemeral}}

`
},
{
    name: "10m",
    type: "interaction",
    prototype: "button",
    code: `
$timeoutMember[$guildID;$findUser[$getUserVar[tm;$authorID];false];10m;false]


$interactionReply[;{newEmbed: {title: TimeOut} {description:
    # User: <@$findUser[$getUserVar[tm;$authorID];false]>

    # Mod: <@$authorID>
    
    # Time: 10Min
    
    
    # Reason: $getUserVar[reason;$authorID]
} {color: $getVar[color]}};;;everyone;false]

$onlyForRoles[$getVar[ownerrole];hey bro you are not owner{options:{ephemeral}}
    `

},
{
    name: "30m",
    type: "interaction",
    prototype: "button",
    code: `
$timeoutMember[$guildID;$findUser[$getUserVar[tm;$authorID];false];30m;false]

$interactionReply[;{newEmbed: {title: TimeOut} {description:
    # User: <@$findUser[$getUserVar[tm;$authorID];false]>

    # Mod: <@$authorID>
    
    # Time: 30Min
    
    
    # Reason: $getUserVar[reason;$authorID]
} {color: $getVar[color]}};;;everyone;false]

$onlyForRoles[$getVar[ownerrole];hey bro you are not owner{options:{ephemeral}}
    `
},
{
    name: "1d",
    type: "interaction",
    prototype: "button",
    code: `
$timeoutMember[$guildID;$findUser[$getUserVar[tm;$authorID];false];24h;false]


$interactionReply[;{newEmbed: {title: TimeOut} {description:
    # User: <@$findUser[$getUserVar[tm;$authorID];false]>

    # Mod: <@$authorID>
    
    # Time: 1Day
    
    
    # Reason: $getUserVar[reason;$authorID]
} {color: $getVar[color]}};;;everyone;false]

$color[$getVar[color]]
$onlyForRoles[$getVar[ownerrole];hey bro you are not owner{options:{ephemeral}}
    `
}]