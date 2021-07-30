import { Injectable } from '@angular/core';
import cloneDeep from 'lodash-es/cloneDeep';
import sortBy from 'lodash-es/sortBy';

export interface KeyOrderConfig {
    columnName: string;
    specialOrder: 'first' | 'last' | 'hide' | 'timeColumnWithDefault';
}

@Injectable()
export class DataProcessingService {

    convertArrayToObject(array, key): Record<string, unknown> {
        const initialValue = {};
        return array.reduce((obj, item) => {
            return {
                ...obj,
                [item[key]]: item,
            };
        }, initialValue);
    }


    arrangeKeys(originalKeys: string[], orderConfig: KeyOrderConfig[]): string[] {
        originalKeys.sort();
        const sortedKeys: string[] = originalKeys;
        orderConfig.forEach(config => {
            if (sortedKeys.indexOf(config.columnName) > -1) {
                if (config.specialOrder === 'first') {
                    sortedKeys.splice(sortedKeys.indexOf(config.columnName), 1);
                    sortedKeys.unshift(config.columnName);
                } else if (config.specialOrder === 'last') {
                    sortedKeys.splice(sortedKeys.indexOf(config.columnName), 1);
                    sortedKeys.push(config.columnName);
                } else if (config.specialOrder === 'hide') {
                    sortedKeys.splice(sortedKeys.indexOf(config.columnName), 1);
                } else if (config.specialOrder === 'timeColumnWithDefault') {
                    sortedKeys.splice(sortedKeys.indexOf(config.columnName), 1);
                    sortedKeys.push(config.columnName);
                }
            } else if (sortedKeys.indexOf('time') > -1 && config.specialOrder === 'timeColumnWithDefault') {
                sortedKeys.splice(sortedKeys.indexOf('time'), 1);
                sortedKeys.push('time');
            }
        });
        return sortedKeys;
    }

    arrangeKeysByAliasName(orderConfig: KeyOrderConfig[], actualAndAliasRecordList: any[]): string[] {
        const sortedRecordListByAliasName = sortBy(actualAndAliasRecordList, 'aliasName');
        const sortedActualKeys: string[] = [];
        sortedRecordListByAliasName.forEach(element => {
            sortedActualKeys.push(element.actualName);
        });

        orderConfig.forEach(config => {
            if (sortedActualKeys.indexOf(config.columnName) > -1) {
                if (config.specialOrder === 'first') {
                    sortedActualKeys.splice(sortedActualKeys.indexOf(config.columnName), 1);
                    sortedActualKeys.unshift(config.columnName);
                } else if (config.specialOrder === 'last') {
                    sortedActualKeys.splice(sortedActualKeys.indexOf(config.columnName), 1);
                    sortedActualKeys.push(config.columnName);
                } else if (config.specialOrder === 'hide') {
                    sortedActualKeys.splice(sortedActualKeys.indexOf(config.columnName), 1);
                } else if (config.specialOrder === 'timeColumnWithDefault') {
                    sortedActualKeys.splice(sortedActualKeys.indexOf(config.columnName), 1);
                    sortedActualKeys.push(config.columnName);
                }
            } else if (sortedActualKeys.indexOf('time') > -1 && config.specialOrder === 'timeColumnWithDefault') {
                sortedActualKeys.splice(sortedActualKeys.indexOf('time'), 1);
                sortedActualKeys.push('time');
            }
        });
        return sortedActualKeys;
    }
}
