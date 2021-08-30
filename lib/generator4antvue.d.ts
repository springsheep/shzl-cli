import Generator from 'yeoman-generator';
export declare class Generator4AntVue extends Generator {
    inputs: {
        name: string;
    };
    constructor(name: string);
    prompting(): Promise<void>;
    writing(): void;
    install(): void;
    end(): void;
}
