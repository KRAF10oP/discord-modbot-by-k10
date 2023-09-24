module.exports = {
    name: "ban",
    code: `
                $ban[$guildID;$findUser[$mentioned[1;false];false];$noMentionMessage[1]]
                    $title[ban]
                        $description[
                                    User: <$findUser[$mentioned[1;false];false]>

                                            Mod: <@$authorID>

                                                    Reason: noMentionMessage[1]
                        ]
                            $color[$getVar[color]]
                                $onlyForRoles[$getVar[ownerrole];hey bro you are not owner{options:{ephemeral}}
                                `
}