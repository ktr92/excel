import {Excel} from './components/excel/Excel';
import {Formula} from './components/formula/Formula';
import {Header} from './components/header/Header';
import {Table} from './components/table/Table';
import {Toolbar} from './components/toolbar/Toolbar';
import './scss/index.scss';

const excel = new Excel('#app', {
  components: [Header, Formula, Toolbar, Table]
})

excel.render()

console.log('excel', excel)
console.log('Header', Header)
