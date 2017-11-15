void setup()
{
  Serial.begin(9600);
  pinMode(A0, INPUT);
}

void loop()
{
  int potenc;
  potenc = analogRead(A0);
  Serial.print(potenc);Serial.print('|');Serial.println(7);
  delay(100);
}
