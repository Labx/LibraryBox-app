#!/usr/bin/awk -f

BEGIN { FS=";" ; printf("{\r\n\"images\":[ \r\n"); }

{
  if(FNR == 1)
  {
      for(i=1 ; i<= NF ; i++)
      {
	titre[i] = $i;
      }      
  }
  else
  { 
    if(FNR > 2)
    {
      printf(",\r\n");
    }
    printf("{");
   
    for(i=1 ; i<= NF ; i++)
    {
      printf ("\"%s\" : \"%s\"",titre[i],$i);
      if(i < NF)
      {
	printf(",");
      }
      
    }
    printf("}\r\n");
  }
 
}

END{printf ("]\r\n}\r\n")}



