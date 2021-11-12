/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: 张鹏
 * @LastEditTime: 2021-08-30 11:05:28
 */
import Generator from 'yeoman-generator';
export declare class Generator4LibRollup extends Generator {
    inputs: {
        name: string;
    };
    constructor(name: string);
    prompting(): Promise<void>;
    writing(): void;
    install(): void;
    end(): void;
}
