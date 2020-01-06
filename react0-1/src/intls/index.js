import { addLocaleData } from 'react-intl'; /* react-intl imports */
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
addLocaleData([...en, ...zh]);  // 引入多语言环境的数据  

