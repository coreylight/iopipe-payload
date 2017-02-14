module.exports = {
    "environment": {
        "agent": {
            "runtime": "nodejs",
            "version": "0.1.2"
        },
        "host": {
            "vm_id": "e79de621-0f15-4638-ab0d-44dc4c74b7a6"
        },
        "os": {
            "hostname": "ip-10-26-48-104",
            "uptime": 11246,
            "totalmem": 3950452736,
            "freemem": 1866575872,
            "usedmem": 2083876864,
            "cpus": [
                {
                    "model": "Intel(R) Xeon(R) CPU E5-2666 v3 @ 2.90GHz",
                    "speed": 2900,
                    "times": {
                        "user": 494100,
                        "nice": 13200,
                        "sys": 140200,
                        "idle": 111494400,
                        "irq": 0
                    }
                },
                {
                    "model": "Intel(R) Xeon(R) CPU E5-2666 v3 @ 2.90GHz",
                    "speed": 2900,
                    "times": {
                        "user": 495400,
                        "nice": 13400,
                        "sys": 140900,
                        "idle": 111475200,
                        "irq": 0
                    }
                }
            ],
            "arch": "x64",
            "linux": {
                "pid": {
                    "self": {
                        "stat_start": {
                            "utime": "23",
                            "stime": "0",
                            "cutime": "0",
                            "cstime": "0",
                            "rss": "9225"
                        },
                        "stat": {
                            "utime": "23",
                            "stime": "0",
                            "cutime": "0",
                            "cstime": "0",
                            "rss": "9225"
                        },
                        "status": {}
                    }
                }
            }
        },
        "nodejs": {
            "title": "/usr/local/lib64/node-v4.3.x/bin/node",
            "version": "v4.3.2",
            "versions": {
                "http_parser": "2.5.2",
                "node": "4.3.2",
                "v8": "4.5.103.35",
                "uv": "1.8.0",
                "zlib": "1.2.8",
                "ares": "1.10.1-DEV",
                "modules": "46",
                "openssl": "1.0.2g"
            },
            "arch": "x64",
            "platform": "linux",
            "argv": [
                "/usr/local/lib64/node-v4.3.x/bin/node",
                "/var/runtime/node_modules/awslambda/index.js"
            ],
            "execArgv": [
                "--max-old-space-size=102",
                "--max-semi-space-size=6",
                "--max-executable-size=13",
                "--expose-gc"
            ],
            "pid": 1,
            "features": {
                "debug": false,
                "uv": true,
                "ipv6": true,
                "tls_npn": true,
                "tls_sni": true,
                "tls_ocsp": true,
                "tls": true
            },
            "execPath": "/usr/local/lib64/node-v4.3.x/bin/node",
            "debugPort": 5858,
            "config": {
                "target_defaults": {
                    "cflags": [],
                    "default_configuration": "Release",
                    "defines": [],
                    "include_dirs": [],
                    "libraries": []
                },
                "variables": {
                    "asan": 0,
                    "gas_version": "2.25",
                    "host_arch": "x64",
                    "icu_small": false,
                    "node_byteorder": "little",
                    "node_install_npm": true,
                    "node_prefix": "/home/scottwis/code/node/src/LambdaRuntimeNode/build/private/install",
                    "node_release_urlbase": "",
                    "node_shared_http_parser": false,
                    "node_shared_libuv": false,
                    "node_shared_openssl": false,
                    "node_shared_zlib": false,
                    "node_tag": "",
                    "node_use_dtrace": false,
                    "node_use_etw": false,
                    "node_use_lttng": false,
                    "node_use_openssl": true,
                    "node_use_perfctr": false,
                    "openssl_fips": "",
                    "openssl_no_asm": 0,
                    "python": "/home/scottwis/code/node/env/MakePython27Default-1.0/runtime/bin/python2.7",
                    "target_arch": "x64",
                    "uv_parent_path": "/deps/uv/",
                    "uv_use_dtrace": false,
                    "v8_enable_gdbjit": 0,
                    "v8_enable_i18n_support": 0,
                    "v8_no_strict_aliasing": 1,
                    "v8_optimized_debug": 0,
                    "v8_random_seed": 0,
                    "v8_use_snapshot": true,
                    "want_separate_host_toolset": 0
                }
            },
            "release": {
                "name": "node",
                "lts": "Argon",
                "sourceUrl": "https://nodejs.org/download/release/v4.3.2/node-v4.3.2.tar.gz",
                "headersUrl": "https://nodejs.org/download/release/v4.3.2/node-v4.3.2-headers.tar.gz"
            },
            "uptime": 1.161,
            "getuid": 481,
            "getgid": 480,
            "geteuid": 481,
            "getegid": 480,
            "memoryUsage": {
                "rss": 38055936,
                "heapTotal": 19692912,
                "heapUsed": 13081216
            }
        }
    },
    "aws": {
        "functionName": "qa-events_debug",
        "functionVersion": "1",
        "invokedFunctionArn": "arn:aws:lambda:us-east-1:554407330061:function:qa-events_debug:current",
        "memoryLimitInMB": "128",
        "awsRequestId": "fd8e1043-f220-11e6-950f-7dd7b59adf97",
        "logGroupName": "/aws/lambda/qa-events_debug",
        "logStreamName": "2017/02/13/[1]fb1559d1bf5f48419f76c4e8cb6c594b"
    },
    "errors": {},
    "custom_metrics": [
        {
            "name": "coolthing",
            "n": 2
        }
    ],
    "time_sec_nanosec": [
        0,
        158328486
    ],
    "time_sec": 0,
    "time_nanosec": 158328486,
    "duration": 158328486,
    "client_id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImF1dGgwfDU4MTA4ZWU4MDA0NDE0YWU2NzkxMzMyZCIsInVzZXJuYW1lIjoiaW9waXBlX2RlbW8iLCJpYXQiOjE0Nzc0ODAxOTcsImF1ZCI6Imh0dHBzOi8vbWV0cmljcy1hcGkuaW9waXBlLmNvbS9ldmVudC8ifQ.rqy-hDI5x_nSJaQiVUviX5YH6OhzR7HMEQG79d_OuRw",
    "getRemainingTimeInMillis": 4821
}
