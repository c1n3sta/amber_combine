int Relay = 4;

void setup() 
{                
  pinMode(Relay, OUTPUT);     
}

void loop() 
{
  digitalWrite(Relay, LOW);   // реле включено
  delay(20000);               
  digitalWrite(Relay, HIGH);  // реле выключено
  delay(20000);               
}
