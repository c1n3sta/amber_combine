const int num=5;
int Relay[num] = {3,6,9,10,11};

int Counter[num]={0,0,0,0,0};
int Status[num]={0,0,0,0,0};
int SensorValue[num]={0,0,0,0,0};
void setup() {
  Serial.begin(9600);
}

void loop() {
  int i,j;
  SensorValue[0] = analogRead(A0);
  SensorValue[1] = analogRead(A1);
  SensorValue[2] = analogRead(A2);
  SensorValue[3] = analogRead(A3);
  SensorValue[3] = analogRead(A4);
  for(i=0;i<num;i++){
    Serial.print(SensorValue[i]);Serial.print(' ');  
    //if(SensorValue[i]>600) analogWrite(Relay[i],255); 
    //else analogWrite(Relay[i],0); 
  }
  Serial.println(' ');

  /*analogWrite(Relay[0],0);
  analogWrite(Relay[1],0);
  analogWrite(Relay[2],0);
  analogWrite(Relay[3],0);*/
  delay(1);
/*
    for(int k=0;k<num;k++){
    while (j!=-1){
        analogWrite(Relay[k],i);
        if(j==0) i+=1;
        if(j==1) i-=1;
        if(i==255) j=1;
        if(i==0) j=-1;
        delay(10);
     }  
     for (int j=255; j <= 0; j--){
        analogWrite(Relay[k],j);
        delay(1);
     } 
    }*/
 
  
}
