/*************************************************
 * @copyright 2017 Flision Corporation Inc.
 * @author: Vincent Chan @ Canton
 * @date: 2017年10月30日
 * @version: 1.0.0
 * @description:
 **************************************************/

var path = require('path');

var default_config = {
    rootpath:'',
    apppath:'',
    libname:'lib',
    global: true
};

/**
 *
 * App Path is the base path
 * $root('') means parent of app path
 * $at('') means directory inside app path
 * $lib('') means lib directory inside app path
 *
 * @param options <string|object> if options is string that is App Path and mostly is __dirname
 * @param options.apppath string App Path mostly is __dirname
 * @param options.libname string Describe lib directory name
 * @param options.global boolean register in global default:true
 * @return
 */
module.exports = function ( options ) {

    var config = default_config;

    if( typeof options === 'string' ){
        config.apppath = options;

    } else {
        if( options.apppath === undefined) throw new Error('apppath is require');

        config.apppath = options.apppath;
        config.global = options.global || true;
    }
    config.apppath = path.normalize(config.apppath);
    config.rootpath = path.normalize( path.join(config.apppath,"../"));

    function resolve_root( uri ) {
        return path.normalize( path.join(config.rootpath,uri));
    }

    function resolve_lib( uri ) {
        return path.normalize(path.join(config.apppath,config.libname,uri));
    }

    function resolve_at( uri ) {
        return path.normalize(path.join(config.apppath,uri));
    }

    //Register in global
    if( config.global ) {

        if ( global ) {
            //NodeJs
            global.$root = resolve_root;
            global.$at = resolve_at;
            global.$lib = resolve_lib;

        } else if ( window ) {
            //browser

            window.$root = resolve_root;
            window.$at = resolve_at;
            window.$lib = resolve_lib;
        }
    }



    var configObject = {
        set_root_path: function ( path ) {
            config.rootpath = path.normalize(path);
        },
        set_lib_name: function ( name ) {
            config.libname = name;
        },
        $root: resolve_root,
        $at: resolve_at,
        $lib: resolve_lib
    };

    return configObject;
};