import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('asset/football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Bournemouth');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
