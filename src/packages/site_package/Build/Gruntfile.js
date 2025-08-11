const sass = require('sass');

module.exports = function(grunt) {

    /**
     * Project configuration.
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            root: '../',
            resources: '<%= paths.root %>Resources/',
            sass: '<%= paths.resources %>Public/Css/src/',
            css: '<%= paths.resources %>Public/Css/',
            fonts: '<%= paths.resources %>Public/Fonts/',
            img: '<%= paths.resources %>Public/Images/',
            js: '<%= paths.resources %>Public/JavaScript/'
        },
        banner: '/*!\n' +
            ' * site package v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2023-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under the <%= pkg.license %> license\n' +
            ' */\n',
        uglify: {
            all: {
                options: {
                    banner: '<%= banner %>',
                    mangle: true,
                    compress: true,
                    beautify: false
                },
                files: {
                    "<%= paths.js %>dest/scripts.js": [
                        "<%= paths.js %>src/app.js"
                    ]
                }
            }
        },
        sass: {
            options: {
                implementation: sass,
                outputStyle: 'expanded',
                precision: 8,
                sourceMap: false
            },
            layout: {
                files: {
                    '<%= paths.css %>dest/app.css': '<%= paths.sass %>layout.scss'
                }
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        overrideBrowserslist: [
                            'Last 2 versions',
                            'Firefox ESR',
                            'IE 9'
                        ]
                    })
                ]
            },
            dev: {
                src: '<%= paths.css %>dest/app.css',
                dest: '<%= paths.css %>dest/app.css'
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: '*',
                advanced: false
            },
            layout: {
                src: '<%= paths.css %>dest/app.css',
                dest: '<%= paths.css %>dest/app.min.css'
            }
        },
        imagemin: {
            extension: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.resources %>',
                    src: [
                        '**/*.{png,jpg,gif}'
                    ],
                    dest: '<%= paths.resources %>'
                }]
            }
        },
        watch: {

            html: {
                files: ['../*.html'],
                options: {
                    livereload: true,
                }
            },
            sass: {
                files: '<%= paths.sass %>**/*.scss',
                tasks: ['css'],
                options: {
                    livereload: true,
                }
            },
            variables: {
                files: '<%= paths.sass %>**/files/*.scss',
                tasks: ['css']
            },
            javascript: {
                files: '<%= paths.js %>src/**/*.js',
                tasks: ['js']
            },
            livereload: {
                // Here we watch the files the sass task will compile to
                // These files are sent to the live reload server after sass compiles to them
                options: { livereload: true },
                files: ['../*'],
            },
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '<%= paths.css %>app.min.css',
                        '.../*/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: 'https://david.ddev.site/',
                }
            }
        },
        reload: {
            liveReload: {}
        },
    });

    /**
     * Register tasks
     //  */
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-reload');
    grunt.loadNpmTasks('grunt-browser-sync');

    /**
     * Grunt update task
     */
    grunt.registerTask('css', ['sass', 'postcss', 'cssmin']);
    grunt.registerTask('js', ['uglify']);
    grunt.registerTask('html', ['reload']);
    grunt.registerTask('build', ['js', 'css']);
    grunt.registerTask('default', ['browserSync', 'build', 'watch']);

};
