import html from './index.html' with {type: 'text'};
import { parse, HTMLElement } from 'node-html-parser';
import path from 'node:path';

const dom = parse(html as unknown as string);
const tables = dom.querySelectorAll('.wikitable');
for(const table of tables){
    const data = parseTable(table);
    await Bun.write(
        path.join(import.meta.dir, 'datas', `${data.pack?.replace(/[<>:"/\\|?*\x00-\x1F]/g, "")}.json`),
        JSON.stringify(data.songs, null, 2)
    )
}

function parseTable(table: HTMLElement){
    const pack = table.querySelector('caption')?.textContent?.trim();

    const songs = Array.from(table.querySelectorAll('tr')).map((e, i) => {
        if(i === 0 || i === 1) return;
        const tds = e.querySelectorAll('td');
        const [bpm_min, bpm_max] = parseBPM(tds[4].textContent);
        return {
            //img: tds[0].querySelector('img')?.getAttribute('src'),
            title_en: tds[1].textContent.trim().replaceAll('\r\n', ' '),
            artist: tds[2].textContent.trim().replaceAll('\r\n', ' '),
            length: parseTime(tds[3].textContent),
            bpm_min,
            bpm_max,
            level_easy: Number(tds[6]?.textContent),
            level_hard: Number(tds[7]?.textContent),
            level_master: Number(tds[8]?.textContent),
            level_supreme: Number(tds[9]?.textContent)
        }
    }).filter(e => e);

    return {
        pack,
        songs
    }
}

function parseTime(time: string){
    if(time.includes(':')){
        const s = time.split(':');
        return Number(s[0]) * 60 + Number(s[1]);
    } else {
        return Number(time);
    }
}

function parseBPM(bpm: string){
    if(bpm.includes('-')){
        const s = bpm.split('-');
        return [Number(s[0]), Number(s[1])]
    } else {
        return [Number(bpm), Number(bpm)]
    }
}