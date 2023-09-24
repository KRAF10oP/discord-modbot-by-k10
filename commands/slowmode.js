module.exports = {
    name: "slowmode",
    code: `
                $description[# Slow Mode Changed To $message]
                    $slowmode[$message;$channelID]
                        $color[$getVar[color]]
                            $onlyForRoles[$getVar[ownerrole];hey bro you are not owner{options:{ephemeral}}
                            `
}
