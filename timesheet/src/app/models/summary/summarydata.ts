import { SummaryHeaderItem } from './summaryheaderitem';
import { SummaryDataItem } from './summarydataitem';

export interface SummaryData {
    header: SummaryHeaderItem[];
    data: SummaryDataItem[];
}