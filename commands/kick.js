module.exports = {
    name: "kick",
    code: `
                $kick[$guildID;$findUser[$mentioned[1;false];false];$noMentionMessage[1]]
                    $title[kick]
                        $description[
                                    User: <$findUser[$mentioned[1;false];false]>

                                            Mod: <@$authorID>

                                                    Reason: noMentionMessage[1]
                        ]
                            $color[$getVar[color]]
                                $onlyForRoles[$getVar[ownerrole];hey bro you are not owner{options:{ephemeral}}
                                `
}