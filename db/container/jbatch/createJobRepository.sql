--
-- jBatchのJobRepositoryを作成します
--
-- @author: hhayakawa_jp <charley-horse@outlook.com>
--

-- Create user
CREATE USER &1 IDENTIFIED BY &2 DEFAULT TABLESPACE USERS TEMPORARY TABLESPACE TEMP;
GRANT CONNECT, RESOURCE TO &1;

-- Create schema
CONNECT &1/&2;
@@/tmp/jbatch/tables/jbatch.sql

exit
