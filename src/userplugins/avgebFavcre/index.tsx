/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { EquicordDevs } from "@utils/constants";
import { Logger } from "@utils/Logger";
import definePlugin from "@utils/types";
import { findByPropsLazy } from "@webpack";

// Lots of keywords in this plugin are ROT13 encoded, because some hosting platforms
// scan for certain keywords to limit their spread. This encoding also prevents the
// plugin from being as easily found in searches on platforms like GitHub.
//
// Use at your own risk.
const AvgebFavcre = string => {
    return string.replace(/[a-z]/gi, x => {
        return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= "m" ? 13 : -13));
    });
};

const logger = new Logger("AvgebFavcre");
const TvsgNpgvbaf = findByPropsLazy(AvgebFavcre("erqrrzTvsgPbqr"));

let startTime = 0;
let found = false;
const queue: string[] = [];

function process() {
    if (found || !queue.length) return;

    found = true;
    const code = queue.shift()!;

    TvsgNpgvbaf[AvgebFavcre("erqrrzTvsgPbqr")]({
        code,
        [AvgebFavcre("baErqrrzrq")]: () => {
            logger.log(`${AvgebFavcre("Fhpprffshyyl erqrrzrq pbqr:")} ${code}`);
            found = false;
            process();
        },
        onError: (err: Error) => {
            logger.error(`${AvgebFavcre("Snvyrq gb erqrrz pbqr:")} ${code}`, err);
            found = false;
            process();
        }
    });
}

export default definePlugin({
    name: AvgebFavcre("AvgebFavcre"),
    description: AvgebFavcre("Nhgbzngvpnyyl erqrrzf Avgeb tvsg yvaxf frag va pung"),
    authors: [EquicordDevs.neoarz],

    start() {
        startTime = Date.now();
        queue.length = 0;
        found = false;
    },

    flux: {
        MESSAGE_CREATE({ message }) {
            if (!message.content) return;

            const match = message.content.match(/(?:discord\.gift\/|discord\.com\/gifts?\/)([a-zA-Z0-9]{16,24})/);
            if (!match) return;

            if (new Date(message.timestamp).getTime() < startTime) return;

            queue.push(match[1]);
            process();
        }
    }
});

