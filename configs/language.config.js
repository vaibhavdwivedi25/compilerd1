const { C, CPP, PYTHON, JAVA, NODEJS, RUBY, JAVASCRIPT, PHP, RUST, PROMPTV1, PROMPTV2 } = require('../enums/supportedLanguages');
const ONE_MB = 1024; // ulimit uses Kilobyte as base unit
const ALLOWED_RAM = process.env.ALLOWED_RAM || 512;

const LANGUAGES_CONFIG = {
    [C]: {
        compile: 'gcc -o a.out solution.c',
        run: './a.out',
        timeout: 2,
        filename: 'solution.c',
        memory: ALLOWED_RAM * ONE_MB,
    },
    [CPP]: {
        compile: 'g++ -o a.out -pthread -O0 solution.cpp',
        run: './a.out',
        timeout: 2,
        filename: 'solution.cpp',
        memory: ALLOWED_RAM * ONE_MB,
    },
    [PYTHON]: {
        compile: 'python -m compileall -q solution.py',
        run: 'python solution.py',
        timeout: 10,
        filename: 'solution.py',
        memory: ALLOWED_RAM * ONE_MB,
    },
    [JAVA]: {
        compile: 'javac Solution.java',
        run: 'java Solution',
        timeout: 4,
        filename: 'Solution.java',
        memory: ALLOWED_RAM * ONE_MB,
    },
    [NODEJS]: {
        compile: 'node --check solution.js',
        run: 'node solution.js',
        timeout: 10,
        filename: 'solution.js',
        memory: 786432, // Node.js v20 requires more initial memory, so initialize it to around 780MB (1.5 * 512MB).
    },
    [RUBY]: {
        compile: 'ruby -c solution.rb',
        run: 'ruby solution.rb',
        timeout: 10,
        filename: 'solution.rb',
        memory: ALLOWED_RAM * ONE_MB,
    },
    [JAVASCRIPT]: {
        compile: '', // JavaScript does not require compilation
        run: 'node solution.js', // Adjust as needed for your setup
        timeout: 10,
        filename: 'solution.js',
        memory: ALLOWED_RAM * ONE_MB,
    },
    [PHP]: {
        compile: 'php -l solution.php', // PHP can be checked for syntax errors
        run: 'php solution.php', // Adjust as needed for your setup
        timeout: 10,
        filename: 'solution.php',
        memory: ALLOWED_RAM * ONE_MB,
    },
    [RUST]: {
        compile: 'rustc -o solution solution.rs', // Compile Rust source to binary
        run: './solution', // Adjust as needed for your setup
        timeout: 10,
        filename: 'solution.rs',
        memory: ALLOWED_RAM * ONE_MB,
    },
    [PROMPTV1]: {
        model: 'gpt-4-1106-preview',
    },
    [PROMPTV2]: {
        model: 'gpt-3.5-turbo-1106',
    },
};

module.exports = { LANGUAGES_CONFIG };
