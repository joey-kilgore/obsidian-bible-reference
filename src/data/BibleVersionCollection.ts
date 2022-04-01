import { IBibleVersion } from '../interfaces/IBibleVersion';
import { BibleAPISourceCollection} from './BibleApiSourceCollection';

export const BibleVersionCollection: IBibleVersion[] = [
  {
    key: 'web',
    versionName: 'World English Bible',
    language: 'English',
    apiUrl: 'https://bible-api.com',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'clementine',
    versionName: 'Clementine Latin Vulgate',
    language: 'Latin',
    apiUrl: 'https://bible-api.com',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'kjv',
    versionName: 'King James Version',
    language: 'English',
    apiUrl: 'https://bible-api.com',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'bbe',
    versionName: 'Bible in Basic English',
    language: 'English',
    apiUrl: 'https://bible-api.com',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'oeb-us',
    versionName: 'Open English Bible, US Edition',
    language: 'English',
    apiUrl: 'https://bible-api.com',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'almeida',
    versionName: 'João Ferreira de Almeida',
    language: 'Portuguese',
    apiUrl: 'https://bible-api.com',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'rccv',
    versionName: 'Romanian Corrected Cornilescu Version',
    language: 'Romanian',
    apiUrl: 'https://bible-api.com',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'cherokee',
    versionName: 'Cherokee New Testament',
    language: 'Cherokee',
    apiUrl: 'https://bible-api.com',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'oeb-cw',
    versionName: 'Open English Bible, Commonwealth Edition',
    language: 'English (UK)',
    apiUrl: 'https://bible-api.com',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'webbe',
    versionName: 'World English Bible, British Edition',
    language: 'English (UK)',
    apiUrl: 'https://bible-api.com',
    apiSource: BibleAPISourceCollection.bibleApi,
  },
  {
    key: 'nkjv',
    versionName: 'New King James Version',
    language: 'English',
    apiSource: BibleAPISourceCollection.bollsLife,
    infoUrl: 'https://wikipedia.org/wiki/New_King_James_Version',
  },
  {
    key: 'niv',
    versionName: 'New International Version, 1984',
    language: 'English',
    apiSource: BibleAPISourceCollection.bollsLife,
  }
];
