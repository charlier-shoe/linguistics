SET SERVEROUTPUT ON;

DECLARE
 vCtr     Number;
 vSQL     VARCHAR2(1000);
 vcurrSchema VARCHAR2(256);
BEGIN

  SELECT sys_context( 'userenv', 'current_schema' ) into vcurrSchema from dual;
  dbms_output.put_line('Current Schema: '||vcurrSchema);

  SELECT COUNT(*)
    INTO vCtr
    FROM user_tables
    WHERE table_name = 'JOBSTATUS';

  IF vCtr = 0 THEN
    dbms_output.put_line('Creating JOBSTATUS table');
    vSQL := 'CREATE TABLE JOBSTATUS
    (
         id            NUMBER(19,0) PRIMARY KEY,
         obj           BLOB,
         CONSTRAINT JOBSTATUS_JOBINST_FK FOREIGN KEY (id) REFERENCES JOBINSTANCEDATA (jobinstanceid) ON DELETE CASCADE
    )';
   EXECUTE IMMEDIATE vSQL;
  END IF;

END;
/
