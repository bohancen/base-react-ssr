import log4js from 'log4js'
const logger = log4js.getLogger();


const log=(log)=>{
  logger.level = 'debug';
  logger.debug(log);
}

export default log