/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2021-11-12 09:40:35
 * @LastEditors: 张鹏
 * @LastEditTime: 2021-11-12 09:44:34
 */
import Generator from 'yeoman-generator';
export declare class Generator4wechat extends Generator {
    inputs: {
        name: string;
    };
    constructor(name: string);
    prompting(): Promise<void>;
    writing(): void;
    install(): void;
    end(): void;
}
