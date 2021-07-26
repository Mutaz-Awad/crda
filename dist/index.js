require('./sourcemap-register.js');module.exports=(()=>{"use strict";var e={351:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){if(i===undefined)i=n;Object.defineProperty(e,i,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,i){if(i===undefined)i=n;e[i]=t[n]});var s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))i(t,e,n);s(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issue=t.issueCommand=void 0;const o=r(n(87));const u=n(278);function issueCommand(e,t,n){const i=new Command(e,t,n);process.stdout.write(i.toString()+o.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const c="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=c+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const n in this.properties){if(this.properties.hasOwnProperty(n)){const i=this.properties[n];if(i){if(t){t=false}else{e+=","}e+=`${n}=${escapeProperty(i)}`}}}}e+=`${c}${escapeData(this.message)}`;return e}}function escapeData(e){return u.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return u.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){if(i===undefined)i=n;Object.defineProperty(e,i,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,i){if(i===undefined)i=n;e[i]=t[n]});var s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))i(t,e,n);s(t,e);return t};var o=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function fulfilled(e){try{step(i.next(e))}catch(e){s(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){s(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.getState=t.saveState=t.group=t.endGroup=t.startGroup=t.info=t.warning=t.error=t.debug=t.isDebug=t.setFailed=t.setCommandEcho=t.setOutput=t.getBooleanInput=t.getMultilineInput=t.getInput=t.addPath=t.setSecret=t.exportVariable=t.ExitCode=void 0;const u=n(351);const c=n(717);const l=n(278);const a=r(n(87));const f=r(n(622));var d;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(d=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const n=l.toCommandValue(t);process.env[e]=n;const i=process.env["GITHUB_ENV"]||"";if(i){const t="_GitHubActionsFileCommandDelimeter_";const i=`${e}<<${t}${a.EOL}${n}${a.EOL}${t}`;c.issueCommand("ENV",i)}else{u.issueCommand("set-env",{name:e},n)}}t.exportVariable=exportVariable;function setSecret(e){u.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){c.issueCommand("PATH",e)}else{u.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${f.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}if(t&&t.trimWhitespace===false){return n}return n.trim()}t.getInput=getInput;function getMultilineInput(e,t){const n=getInput(e,t).split("\n").filter(e=>e!=="");return n}t.getMultilineInput=getMultilineInput;function getBooleanInput(e,t){const n=["true","True","TRUE"];const i=["false","False","FALSE"];const s=getInput(e,t);if(n.includes(s))return true;if(i.includes(s))return false;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}\n`+`Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}t.getBooleanInput=getBooleanInput;function setOutput(e,t){process.stdout.write(a.EOL);u.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){u.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=d.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){u.issueCommand("debug",{},e)}t.debug=debug;function error(e){u.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){u.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+a.EOL)}t.info=info;function startGroup(e){u.issue("group",e)}t.startGroup=startGroup;function endGroup(){u.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return o(this,void 0,void 0,function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n})}t.group=group;function saveState(e,t){u.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},717:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){if(i===undefined)i=n;Object.defineProperty(e,i,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,i){if(i===undefined)i=n;e[i]=t[n]});var s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))i(t,e,n);s(t,e);return t};Object.defineProperty(t,"__esModule",{value:true});t.issueCommand=void 0;const o=r(n(747));const u=r(n(87));const c=n(278);function issueCommand(e,t){const n=process.env[`GITHUB_${e}`];if(!n){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!o.existsSync(n)){throw new Error(`Missing file at path: ${n}`)}o.appendFileSync(n,`${c.toCommandValue(t)}${u.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},278:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.toCommandValue=void 0;function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},514:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){if(i===undefined)i=n;Object.defineProperty(e,i,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,i){if(i===undefined)i=n;e[i]=t[n]});var s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))i(t,e,n);s(t,e);return t};var o=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function fulfilled(e){try{step(i.next(e))}catch(e){s(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){s(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.getExecOutput=t.exec=void 0;const u=n(304);const c=r(n(159));function exec(e,t,n){return o(this,void 0,void 0,function*(){const i=c.argStringToArray(e);if(i.length===0){throw new Error(`Parameter 'commandLine' cannot be null or empty.`)}const s=i[0];t=i.slice(1).concat(t||[]);const r=new c.ToolRunner(s,t,n);return r.exec()})}t.exec=exec;function getExecOutput(e,t,n){var i,s;return o(this,void 0,void 0,function*(){let r="";let o="";const c=new u.StringDecoder("utf8");const l=new u.StringDecoder("utf8");const a=(i=n===null||n===void 0?void 0:n.listeners)===null||i===void 0?void 0:i.stdout;const f=(s=n===null||n===void 0?void 0:n.listeners)===null||s===void 0?void 0:s.stderr;const d=e=>{o+=l.write(e);if(f){f(e)}};const p=e=>{r+=c.write(e);if(a){a(e)}};const h=Object.assign(Object.assign({},n===null||n===void 0?void 0:n.listeners),{stdout:p,stderr:d});const m=yield exec(e,t,Object.assign(Object.assign({},n),{listeners:h}));r+=c.end();o+=l.end();return{exitCode:m,stdout:r,stderr:o}})}t.getExecOutput=getExecOutput},159:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){if(i===undefined)i=n;Object.defineProperty(e,i,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,i){if(i===undefined)i=n;e[i]=t[n]});var s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))i(t,e,n);s(t,e);return t};var o=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function fulfilled(e){try{step(i.next(e))}catch(e){s(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){s(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.argStringToArray=t.ToolRunner=void 0;const u=r(n(87));const c=r(n(614));const l=r(n(129));const a=r(n(622));const f=r(n(436));const d=r(n(962));const p=n(213);const h=process.platform==="win32";class ToolRunner extends c.EventEmitter{constructor(e,t,n){super();if(!e){throw new Error("Parameter 'toolPath' cannot be null or empty.")}this.toolPath=e;this.args=t||[];this.options=n||{}}_debug(e){if(this.options.listeners&&this.options.listeners.debug){this.options.listeners.debug(e)}}_getCommandString(e,t){const n=this._getSpawnFileName();const i=this._getSpawnArgs(e);let s=t?"":"[command]";if(h){if(this._isCmdFile()){s+=n;for(const e of i){s+=` ${e}`}}else if(e.windowsVerbatimArguments){s+=`"${n}"`;for(const e of i){s+=` ${e}`}}else{s+=this._windowsQuoteCmdArg(n);for(const e of i){s+=` ${this._windowsQuoteCmdArg(e)}`}}}else{s+=n;for(const e of i){s+=` ${e}`}}return s}_processLineBuffer(e,t,n){try{let i=t+e.toString();let s=i.indexOf(u.EOL);while(s>-1){const e=i.substring(0,s);n(e);i=i.substring(s+u.EOL.length);s=i.indexOf(u.EOL)}return i}catch(e){this._debug(`error processing line. Failed with error ${e}`);return""}}_getSpawnFileName(){if(h){if(this._isCmdFile()){return process.env["COMSPEC"]||"cmd.exe"}}return this.toolPath}_getSpawnArgs(e){if(h){if(this._isCmdFile()){let t=`/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;for(const n of this.args){t+=" ";t+=e.windowsVerbatimArguments?n:this._windowsQuoteCmdArg(n)}t+='"';return[t]}}return this.args}_endsWith(e,t){return e.endsWith(t)}_isCmdFile(){const e=this.toolPath.toUpperCase();return this._endsWith(e,".CMD")||this._endsWith(e,".BAT")}_windowsQuoteCmdArg(e){if(!this._isCmdFile()){return this._uvQuoteCmdArg(e)}if(!e){return'""'}const t=[" ","\t","&","(",")","[","]","{","}","^","=",";","!","'","+",",","`","~","|","<",">",'"'];let n=false;for(const i of e){if(t.some(e=>e===i)){n=true;break}}if(!n){return e}let i='"';let s=true;for(let t=e.length;t>0;t--){i+=e[t-1];if(s&&e[t-1]==="\\"){i+="\\"}else if(e[t-1]==='"'){s=true;i+='"'}else{s=false}}i+='"';return i.split("").reverse().join("")}_uvQuoteCmdArg(e){if(!e){return'""'}if(!e.includes(" ")&&!e.includes("\t")&&!e.includes('"')){return e}if(!e.includes('"')&&!e.includes("\\")){return`"${e}"`}let t='"';let n=true;for(let i=e.length;i>0;i--){t+=e[i-1];if(n&&e[i-1]==="\\"){t+="\\"}else if(e[i-1]==='"'){n=true;t+="\\"}else{n=false}}t+='"';return t.split("").reverse().join("")}_cloneExecOptions(e){e=e||{};const t={cwd:e.cwd||process.cwd(),env:e.env||process.env,silent:e.silent||false,windowsVerbatimArguments:e.windowsVerbatimArguments||false,failOnStdErr:e.failOnStdErr||false,ignoreReturnCode:e.ignoreReturnCode||false,delay:e.delay||1e4};t.outStream=e.outStream||process.stdout;t.errStream=e.errStream||process.stderr;return t}_getSpawnOptions(e,t){e=e||{};const n={};n.cwd=e.cwd;n.env=e.env;n["windowsVerbatimArguments"]=e.windowsVerbatimArguments||this._isCmdFile();if(e.windowsVerbatimArguments){n.argv0=`"${t}"`}return n}exec(){return o(this,void 0,void 0,function*(){if(!d.isRooted(this.toolPath)&&(this.toolPath.includes("/")||h&&this.toolPath.includes("\\"))){this.toolPath=a.resolve(process.cwd(),this.options.cwd||process.cwd(),this.toolPath)}this.toolPath=yield f.which(this.toolPath,true);return new Promise((e,t)=>o(this,void 0,void 0,function*(){this._debug(`exec tool: ${this.toolPath}`);this._debug("arguments:");for(const e of this.args){this._debug(`   ${e}`)}const n=this._cloneExecOptions(this.options);if(!n.silent&&n.outStream){n.outStream.write(this._getCommandString(n)+u.EOL)}const i=new ExecState(n,this.toolPath);i.on("debug",e=>{this._debug(e)});if(this.options.cwd&&!(yield d.exists(this.options.cwd))){return t(new Error(`The cwd: ${this.options.cwd} does not exist!`))}const s=this._getSpawnFileName();const r=l.spawn(s,this._getSpawnArgs(n),this._getSpawnOptions(this.options,s));let o="";if(r.stdout){r.stdout.on("data",e=>{if(this.options.listeners&&this.options.listeners.stdout){this.options.listeners.stdout(e)}if(!n.silent&&n.outStream){n.outStream.write(e)}o=this._processLineBuffer(e,o,e=>{if(this.options.listeners&&this.options.listeners.stdline){this.options.listeners.stdline(e)}})})}let c="";if(r.stderr){r.stderr.on("data",e=>{i.processStderr=true;if(this.options.listeners&&this.options.listeners.stderr){this.options.listeners.stderr(e)}if(!n.silent&&n.errStream&&n.outStream){const t=n.failOnStdErr?n.errStream:n.outStream;t.write(e)}c=this._processLineBuffer(e,c,e=>{if(this.options.listeners&&this.options.listeners.errline){this.options.listeners.errline(e)}})})}r.on("error",e=>{i.processError=e.message;i.processExited=true;i.processClosed=true;i.CheckComplete()});r.on("exit",e=>{i.processExitCode=e;i.processExited=true;this._debug(`Exit code ${e} received from tool '${this.toolPath}'`);i.CheckComplete()});r.on("close",e=>{i.processExitCode=e;i.processExited=true;i.processClosed=true;this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);i.CheckComplete()});i.on("done",(n,i)=>{if(o.length>0){this.emit("stdline",o)}if(c.length>0){this.emit("errline",c)}r.removeAllListeners();if(n){t(n)}else{e(i)}});if(this.options.input){if(!r.stdin){throw new Error("child process missing stdin")}r.stdin.end(this.options.input)}}))})}}t.ToolRunner=ToolRunner;function argStringToArray(e){const t=[];let n=false;let i=false;let s="";function append(e){if(i&&e!=='"'){s+="\\"}s+=e;i=false}for(let r=0;r<e.length;r++){const o=e.charAt(r);if(o==='"'){if(!i){n=!n}else{append(o)}continue}if(o==="\\"&&i){append(o);continue}if(o==="\\"&&n){i=true;continue}if(o===" "&&!n){if(s.length>0){t.push(s);s=""}continue}append(o)}if(s.length>0){t.push(s.trim())}return t}t.argStringToArray=argStringToArray;class ExecState extends c.EventEmitter{constructor(e,t){super();this.processClosed=false;this.processError="";this.processExitCode=0;this.processExited=false;this.processStderr=false;this.delay=1e4;this.done=false;this.timeout=null;if(!t){throw new Error("toolPath must not be empty")}this.options=e;this.toolPath=t;if(e.delay){this.delay=e.delay}}CheckComplete(){if(this.done){return}if(this.processClosed){this._setResult()}else if(this.processExited){this.timeout=p.setTimeout(ExecState.HandleTimeout,this.delay,this)}}_debug(e){this.emit("debug",e)}_setResult(){let e;if(this.processExited){if(this.processError){e=new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`)}else if(this.processExitCode!==0&&!this.options.ignoreReturnCode){e=new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`)}else if(this.processStderr&&this.options.failOnStdErr){e=new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`)}}if(this.timeout){clearTimeout(this.timeout);this.timeout=null}this.done=true;this.emit("done",e,this.processExitCode)}static HandleTimeout(e){if(e.done){return}if(!e.processClosed&&e.processExited){const t=`The STDIO streams did not close within ${e.delay/1e3} seconds of the exit event from process '${e.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;e._debug(t)}e._setResult()}}},962:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){if(i===undefined)i=n;Object.defineProperty(e,i,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,i){if(i===undefined)i=n;e[i]=t[n]});var s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))i(t,e,n);s(t,e);return t};var o=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function fulfilled(e){try{step(i.next(e))}catch(e){s(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){s(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};var u;Object.defineProperty(t,"__esModule",{value:true});t.getCmdPath=t.tryGetExecutablePath=t.isRooted=t.isDirectory=t.exists=t.IS_WINDOWS=t.unlink=t.symlink=t.stat=t.rmdir=t.rename=t.readlink=t.readdir=t.mkdir=t.lstat=t.copyFile=t.chmod=void 0;const c=r(n(747));const l=r(n(622));u=c.promises,t.chmod=u.chmod,t.copyFile=u.copyFile,t.lstat=u.lstat,t.mkdir=u.mkdir,t.readdir=u.readdir,t.readlink=u.readlink,t.rename=u.rename,t.rmdir=u.rmdir,t.stat=u.stat,t.symlink=u.symlink,t.unlink=u.unlink;t.IS_WINDOWS=process.platform==="win32";function exists(e){return o(this,void 0,void 0,function*(){try{yield t.stat(e)}catch(e){if(e.code==="ENOENT"){return false}throw e}return true})}t.exists=exists;function isDirectory(e,n=false){return o(this,void 0,void 0,function*(){const i=n?yield t.stat(e):yield t.lstat(e);return i.isDirectory()})}t.isDirectory=isDirectory;function isRooted(e){e=normalizeSeparators(e);if(!e){throw new Error('isRooted() parameter "p" cannot be empty')}if(t.IS_WINDOWS){return e.startsWith("\\")||/^[A-Z]:/i.test(e)}return e.startsWith("/")}t.isRooted=isRooted;function tryGetExecutablePath(e,n){return o(this,void 0,void 0,function*(){let i=undefined;try{i=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(i&&i.isFile()){if(t.IS_WINDOWS){const t=l.extname(e).toUpperCase();if(n.some(e=>e.toUpperCase()===t)){return e}}else{if(isUnixExecutable(i)){return e}}}const s=e;for(const r of n){e=s+r;i=undefined;try{i=yield t.stat(e)}catch(t){if(t.code!=="ENOENT"){console.log(`Unexpected error attempting to determine if executable file exists '${e}': ${t}`)}}if(i&&i.isFile()){if(t.IS_WINDOWS){try{const n=l.dirname(e);const i=l.basename(e).toUpperCase();for(const s of yield t.readdir(n)){if(i===s.toUpperCase()){e=l.join(n,s);break}}}catch(t){console.log(`Unexpected error attempting to determine the actual case of the file '${e}': ${t}`)}return e}else{if(isUnixExecutable(i)){return e}}}}return""})}t.tryGetExecutablePath=tryGetExecutablePath;function normalizeSeparators(e){e=e||"";if(t.IS_WINDOWS){e=e.replace(/\//g,"\\");return e.replace(/\\\\+/g,"\\")}return e.replace(/\/\/+/g,"/")}function isUnixExecutable(e){return(e.mode&1)>0||(e.mode&8)>0&&e.gid===process.getgid()||(e.mode&64)>0&&e.uid===process.getuid()}function getCmdPath(){var e;return(e=process.env["COMSPEC"])!==null&&e!==void 0?e:`cmd.exe`}t.getCmdPath=getCmdPath},436:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){if(i===undefined)i=n;Object.defineProperty(e,i,{enumerable:true,get:function(){return t[n]}})}:function(e,t,n,i){if(i===undefined)i=n;e[i]=t[n]});var s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:true,value:t})}:function(e,t){e["default"]=t});var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(n!=="default"&&Object.hasOwnProperty.call(e,n))i(t,e,n);s(t,e);return t};var o=this&&this.__awaiter||function(e,t,n,i){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,s){function fulfilled(e){try{step(i.next(e))}catch(e){s(e)}}function rejected(e){try{step(i["throw"](e))}catch(e){s(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:true});t.findInPath=t.which=t.mkdirP=t.rmRF=t.mv=t.cp=void 0;const u=n(357);const c=r(n(129));const l=r(n(622));const a=n(669);const f=r(n(962));const d=a.promisify(c.exec);const p=a.promisify(c.execFile);function cp(e,t,n={}){return o(this,void 0,void 0,function*(){const{force:i,recursive:s,copySourceDirectory:r}=readCopyOptions(n);const o=(yield f.exists(t))?yield f.stat(t):null;if(o&&o.isFile()&&!i){return}const u=o&&o.isDirectory()&&r?l.join(t,l.basename(e)):t;if(!(yield f.exists(e))){throw new Error(`no such file or directory: ${e}`)}const c=yield f.stat(e);if(c.isDirectory()){if(!s){throw new Error(`Failed to copy. ${e} is a directory, but tried to copy without recursive flag.`)}else{yield cpDirRecursive(e,u,0,i)}}else{if(l.relative(e,u)===""){throw new Error(`'${u}' and '${e}' are the same file`)}yield copyFile(e,u,i)}})}t.cp=cp;function mv(e,t,n={}){return o(this,void 0,void 0,function*(){if(yield f.exists(t)){let i=true;if(yield f.isDirectory(t)){t=l.join(t,l.basename(e));i=yield f.exists(t)}if(i){if(n.force==null||n.force){yield rmRF(t)}else{throw new Error("Destination already exists")}}}yield mkdirP(l.dirname(t));yield f.rename(e,t)})}t.mv=mv;function rmRF(e){return o(this,void 0,void 0,function*(){if(f.IS_WINDOWS){if(/[*"<>|]/.test(e)){throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows')}try{const t=f.getCmdPath();if(yield f.isDirectory(e,true)){yield d(`${t} /s /c "rd /s /q "%inputPath%""`,{env:{inputPath:e}})}else{yield d(`${t} /s /c "del /f /a "%inputPath%""`,{env:{inputPath:e}})}}catch(e){if(e.code!=="ENOENT")throw e}try{yield f.unlink(e)}catch(e){if(e.code!=="ENOENT")throw e}}else{let t=false;try{t=yield f.isDirectory(e)}catch(e){if(e.code!=="ENOENT")throw e;return}if(t){yield p(`rm`,[`-rf`,`${e}`])}else{yield f.unlink(e)}}})}t.rmRF=rmRF;function mkdirP(e){return o(this,void 0,void 0,function*(){u.ok(e,"a path argument must be provided");yield f.mkdir(e,{recursive:true})})}t.mkdirP=mkdirP;function which(e,t){return o(this,void 0,void 0,function*(){if(!e){throw new Error("parameter 'tool' is required")}if(t){const t=yield which(e,false);if(!t){if(f.IS_WINDOWS){throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`)}else{throw new Error(`Unable to locate executable file: ${e}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`)}}return t}const n=yield findInPath(e);if(n&&n.length>0){return n[0]}return""})}t.which=which;function findInPath(e){return o(this,void 0,void 0,function*(){if(!e){throw new Error("parameter 'tool' is required")}const t=[];if(f.IS_WINDOWS&&process.env["PATHEXT"]){for(const e of process.env["PATHEXT"].split(l.delimiter)){if(e){t.push(e)}}}if(f.isRooted(e)){const n=yield f.tryGetExecutablePath(e,t);if(n){return[n]}return[]}if(e.includes(l.sep)){return[]}const n=[];if(process.env.PATH){for(const e of process.env.PATH.split(l.delimiter)){if(e){n.push(e)}}}const i=[];for(const s of n){const n=yield f.tryGetExecutablePath(l.join(s,e),t);if(n){i.push(n)}}return i})}t.findInPath=findInPath;function readCopyOptions(e){const t=e.force==null?true:e.force;const n=Boolean(e.recursive);const i=e.copySourceDirectory==null?true:Boolean(e.copySourceDirectory);return{force:t,recursive:n,copySourceDirectory:i}}function cpDirRecursive(e,t,n,i){return o(this,void 0,void 0,function*(){if(n>=255)return;n++;yield mkdirP(t);const s=yield f.readdir(e);for(const r of s){const s=`${e}/${r}`;const o=`${t}/${r}`;const u=yield f.lstat(s);if(u.isDirectory()){yield cpDirRecursive(s,o,n,i)}else{yield copyFile(s,o,i)}}yield f.chmod(t,(yield f.stat(e)).mode)})}function copyFile(e,t,n){return o(this,void 0,void 0,function*(){if((yield f.lstat(e)).isSymbolicLink()){try{yield f.lstat(t);yield f.unlink(t)}catch(e){if(e.code==="EPERM"){yield f.chmod(t,"0666");yield f.unlink(t)}}const n=yield f.readlink(e);yield f.symlink(n,t,f.IS_WINDOWS?"junction":null)}else if(!(yield f.exists(t))||n){yield f.copyFile(e,t)}})}},978:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:true});const i=n(747);const s=n(874);var r;(function(e){async function configSet(e,t){const n=[s.default.Commands.Config,s.default.SubCommands.set,e,t];await s.default.exec(n)}e.configSet=configSet;async function auth(e){const t=s.default.getOptions({"snyk-token":e});const n=[s.default.Commands.Auth,...t];const i=await s.default.exec(n,{hideOutput:true});return i.stdout}e.auth=auth;async function analyse(e,t){const n=s.default.getOptions({json:"",verbose:"",client:"gh-actions"});const r=[s.default.Commands.Analyse,e,...n];const o=await s.default.exec(r,{ignoreReturnCode:true,hideOutput:true});const u=o.stdout;i.writeFileSync(t,u,"utf8")}e.analyse=analyse})(r||(r={}));t.default=r},412:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:true});const i=n(413);class CmdOutputHider extends i.Writable{constructor(e,t){super();this.outStream=e;this.outContents=t;this.hasEchoedCmdLine=false}write(e){if(!this.hasEchoedCmdLine){this.outStream.write(e);if(e.toString().includes("\n")){this.hasEchoedCmdLine=true;this.outStream.write(`*** Suppressing command output\n`)}}else{this.outContents+=e.toString()}return false}getContents(){return this.outContents}}t.default=CmdOutputHider},260:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:true});t.convert=void 0;const i=n(747);const s=n(186);const r=n(314);const o="https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json";const u="2.1.0";function crdaToRules(e,t){const n=[];const i=[];if(e.low!==null){const s=fetchRules(e.low,t,i);n.push(...s[0]);i.push(...s[1])}if(e.medium!==null){const s=fetchRules(e.medium,t,i);n.push(...s[0]);i.push(...s[1])}if(e.high!==null){const s=fetchRules(e.high,t,i);n.push(...s[0]);i.push(...s[1])}if(e.critical!==null){const s=fetchRules(e.critical,t,i);n.push(...s[0]);i.push(...s[1])}return n}function fetchRules(e,t,n){const i=[];e.forEach(e=>{const s=e.id;if(n.includes(s)){return}let o="";if(s in t){const e=t[s];o=`Introduced through ${e.join(", ")}. `}const u=e.cve_ids;const c=e.cvss;let l="none";if(e.severity==="medium"){l="warning"}if(e.severity==="high"||e.severity==="critical"){l="error"}const a={text:`${r.capitalizeFirstLetter(e.severity)} severity - ${e.title} vulnerability`};const f={text:`${u.join(", ")}`};const d={text:`${o}More details are available at ${e.url}`};const p={level:l};const h={tags:["security",...u,`cvss:${c}`]};const m={id:s,shortDescription:a,fullDescription:f,help:d,defaultConfiguration:p,properties:h};i.push(m);n.push(s)});return[i,n]}let c=0;function crdaToResult(e,t,n){let s=true;const r=[];const o=i.readFileSync(t,"utf-8");const u=o.split(/\r\n|\n/);const l=e.name;const a=e.version;let f=[];if(n){f=n.split(":");s=false}else{f=l.split(":");c=0}let d="";if(f[1]){d=`<artifactId>${f[1]}</artifactId>`}const p=u.findIndex(e=>{return e.includes(d!==""?d:f[0])});const h=[];const m=[];if(e.publicly_available_vulnerabilities!==null){const n=fetchResults(e.publicly_available_vulnerabilities,t,p,s,l,a);r.push(...n[0]);if(c===0){m.push(...n[1])}else{h.push(...n[1])}}if(e.vulnerabilities_unique_with_snyk!==null){const n=fetchResults(e.vulnerabilities_unique_with_snyk,t,p,s,l,a);r.push(...n[0]);if(c===0){m.push(...n[1])}else{h.push(...n[1])}}if(e.vulnerable_transitives!==null){c++;e.vulnerable_transitives.forEach(e=>{const n=crdaToResult(e,t,l);r.push(...n[0]);h.push(...n[2])})}return[r,m,h]}function fetchResults(e,t,n,i,s,r){const o=[];const u=[];e.forEach(e=>{const c=e.id;const l={text:`This file introduces a vulnerability ${e.title} with `+`${e.severity} severity. `+`Vulnerability present at ${s}@${r}`};const a={uri:t};const f={startLine:n+1};const d={artifactLocation:a,region:f};const p={physicalLocation:d};const h={directDependency:i};const m={ruleId:c,message:l,locations:[p],properties:h};o.push(m);u.push(c)});return[o,u]}function getSarif(e,t){const n=JSON.parse(e);let i=[];const r=[];const c=[];const l={};n.analysed_dependencies.forEach(e=>{const n=crdaToResult(e,t);r.push(...n[1]);c.push(...n[2]);n[2].forEach(t=>{const n=[e.name];if(t in l){const e=l[t];n.push(...e)}l[t]=n});i.push(...n[0])});i=i.reduce((e,t)=>{var n;const i=t.ruleId;const s=(n=t.properties)===null||n===void 0?void 0:n.directDependency;if(!(i!==undefined&&r.includes(i)&&c.includes(i)&&!s)){e.push(t)}return e},new Array);s.info(`Number of results combined is: ${i.length}`);const a=crdaToRules(n.severity,l);s.info(`Number of rules combined is: ${a.length}`);return{$schema:o,version:u,runs:[{tool:{driver:{name:"Code Ready Dependency Analytics",rules:a}},results:i}]}}function convert(e,t,n){const r=i.readFileSync(e,"utf-8");const o=getSarif(r,t);if(o.$schema){i.writeFileSync(n,JSON.stringify(o,undefined,4),"utf-8")}s.info(`Created: ${n}`)}t.convert=convert},874:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:true});const i=n(87);const s=n(514);const r=n(186);const o=n(314);const u=n(412);const c=o.getOS()==="windows"?"crda.exe":"crda";var l;(function(e){let t;(function(e){e["Auth"]="auth";e["Analyse"]="analyse";e["Config"]="config"})(t=e.Commands||(e.Commands={}));let n;(function(e){e["set"]="set"})(n=e.SubCommands||(e.SubCommands={}));let o;(function(e){e["CrdaKey"]="crda_key";e["ConsentTelemetry"]="consent_telemetry"})(o=e.ConfigKeys||(e.ConfigKeys={}));let l;(function(e){e["SnykToken"]="snyk-token";e["Json"]="json";e["Verbose"]="verbose";e["Client"]="client"})(l=e.Flags||(e.Flags={}));function getOptions(e){return Object.entries(e).reduce((e,t)=>{const[n,i]=t;if(i==null){return e}let s="--"+n;if(i!==""){s+=`=${i}`}e.push(s);return e},[])}e.getOptions=getOptions;async function exec(e,t={}){let n="";let o="";const l={...t};if(t.hideOutput){const e=t.outStream||process.stdout;l.outStream=new u.default(e,n)}l.ignoreReturnCode=true;l.listeners={stdline:e=>{n+=e+i.EOL},errline:e=>{o+=e+i.EOL}};if(t.group){const t=[c,...e].join(" ");r.startGroup(t)}try{const i=await s.exec(c,e,l);if(t.ignoreReturnCode!==true&&i!==0){let e=`crda exited with code ${i}`;if(o){e+=`\n${o}`}throw new Error(e)}if(l.outStream instanceof u.default){n=l.outStream.getContents()}return{exitCode:i,stdout:n,stderr:o}}finally{if(t.group){r.endGroup()}}}e.exec=exec})(l||(l={}));t.default=l},69:(e,t)=>{Object.defineProperty(t,"__esModule",{value:true});t.Outputs=t.Inputs=void 0;var n;(function(e){e["ANALYSIS_REPORT_FILE_NAME"]="analysis_report_file_name";e["CONSENT_TELEMETRY"]="consent_telemetry";e["CRDA_KEY"]="crda_key";e["MANIFEST_FILE_PATH"]="manifest_file_path";e["SNYK_TOKEN"]="snyk_token"})(n=t.Inputs||(t.Inputs={}));var i;(function(e){e["CRDA_KEY"]="crda_key";e["CRDA_REPORT_JSON"]="crda_report_json";e["CRDA_REPORT_SARIF"]="crda_report_sarif"})(i=t.Outputs||(t.Outputs={}))},144:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:true});const i=n(186);const s=n(69);const r=n(314);const o=n(978);const u=n(874);const c=n(260);async function run(){i.debug(`Runner OS is ${r.getOS()}`);i.debug(`Node version is ${process.version}`);const e=i.getInput(s.Inputs.MANIFEST_FILE_PATH);const t=i.getInput(s.Inputs.SNYK_TOKEN);const n=i.getInput(s.Inputs.CRDA_KEY);const l=i.getInput(s.Inputs.CONSENT_TELEMETRY)||"true";const a=i.getInput(s.Inputs.ANALYSIS_REPORT_FILE_NAME)||"crda_analysis_report";const f=`${a}.json`||"crda_analysis_report.json";const d=`${a}.sarif`||"crda_analysis_report.sarif";i.info(`Setting up the ${u.default.ConfigKeys.ConsentTelemetry} to ${l}`);await o.default.configSet(u.default.ConfigKeys.ConsentTelemetry,l);if(t){i.info(`⏳ Authenticating with the provided Snyk Token`);const e=await o.default.auth(t);const n=e.split("\n");const r=n[2].split(":")[1];i.setSecret(r);i.info(e);i.info(`✅ Generated CRDA key is stored in the output ${s.Outputs.CRDA_KEY}.`);i.setOutput(s.Outputs.CRDA_KEY,r)}else if(n){i.info(`Setting up the ${u.default.ConfigKeys.CrdaKey} with the provided value.`);await o.default.configSet(u.default.ConfigKeys.CrdaKey,n)}else{throw new Error(`❌ Input ${s.Inputs.CRDA_KEY} or ${s.Inputs.SNYK_TOKEN} must be provided.`)}i.info(`⏳ Analysing your Dependency Stack! Please wait...`);await o.default.analyse(e,f);i.info(`✅ Analysis completed. Analysis report is available at ${f}`);i.setOutput(s.Outputs.CRDA_REPORT_JSON,f);i.info(`⏳ Converting JSON output to Sarif format`);c.convert(f,e,d);i.info(`✅ Sucessfully converted analysis JSON to the Sarif format. `+`Converted file is available at ${d}`);i.setOutput(s.Outputs.CRDA_REPORT_SARIF,d)}run().then(()=>{i.info("Success.")}).catch(e=>{i.setFailed(e.message)})},314:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:true});t.capitalizeFirstLetter=t.getOS=void 0;const i=n(186);let s;function getOS(){if(s==null){const e=process.platform;if(e==="win32"){s="windows"}else if(e==="darwin"){s="macos"}else if(e!=="linux"){i.warning(`Unrecognized OS "${e}"`);s="linux"}else{s="linux"}}return s}t.getOS=getOS;function capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}t.capitalizeFirstLetter=capitalizeFirstLetter},357:e=>{e.exports=require("assert")},129:e=>{e.exports=require("child_process")},614:e=>{e.exports=require("events")},747:e=>{e.exports=require("fs")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")},413:e=>{e.exports=require("stream")},304:e=>{e.exports=require("string_decoder")},213:e=>{e.exports=require("timers")},669:e=>{e.exports=require("util")}};var t={};function __webpack_require__(n){if(t[n]){return t[n].exports}var i=t[n]={exports:{}};var s=true;try{e[n].call(i.exports,i,i.exports,__webpack_require__);s=false}finally{if(s)delete t[n]}return i.exports}__webpack_require__.ab=__dirname+"/";return __webpack_require__(144)})();
//# sourceMappingURL=index.js.map