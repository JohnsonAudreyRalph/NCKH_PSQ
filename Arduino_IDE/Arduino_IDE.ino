#include <ArduinoJson.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>

#define STASSID "Quyen"
#define STAPSK  "ngokylong"
String SERVER = "http://192.168.1.105:8000/WEB_Area_2/Get_JSON/";

int TB_1 = D5;
int TB_2 = D6;

void setup()
{
  Serial.begin(115200);
  pinMode(TB_1, OUTPUT);
  pinMode(TB_2, OUTPUT);
  WiFi.begin(STASSID, STAPSK);
  while(WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(500);
  }
  Serial.println("Kết nối thành công!!!!!");
}

void loop()
{
  while(WiFi.status() == WL_CONNECTED)
  {
    HTTPClient http;
    http.begin(SERVER);
    int Existence = http.GET();
    if(Existence > 0)
    {
      String Load = http.getString();
      Serial.println(Load);
      DynamicJsonBuffer json(512);
      JsonObject& root = json.parseObject(Load);
      int STATUS_1 = root["ID_1"]["STATUS"];
      int STATUS_2 = root["ID_2"]["STATUS"];
      int STATUS_3 = root["ID_3"]["STATUS"];
      int STATUS_4 = root["ID_4"]["STATUS"];
      int STATUS_5 = root["ID_5"]["STATUS"];
      int STATUS_6 = root["ID_6"]["STATUS"];
      int STATUS_7 = root["ID_7"]["STATUS"];
      Serial.println("========================");
      Serial.println(STATUS_1);
      Serial.println(STATUS_2);
      Serial.println(STATUS_3);
      Serial.println(STATUS_4);
      Serial.println(STATUS_5);
      Serial.println(STATUS_6);
      Serial.println(STATUS_7);
      Serial.println("========================");
      if(STATUS_1 == 1)
      {
        Serial.println("Led 1 Turned ON");
        digitalWrite(TB_1, HIGH);
      }
      else if(STATUS_1 == 0)
      {
        Serial.println("Led 1 Turned OFF");
        digitalWrite(TB_1, LOW);
      }
      if(STATUS_2 == 1)
      {
        Serial.println("Led 2 Turned OFF");
        digitalWrite(TB_2, HIGH);
      }
      else if(STATUS_2 == 0)
      {
        Serial.println("Led 2 Turned OFF");
        digitalWrite(TB_2, LOW);
      }
    }
    http.end();
  }
  delay(30);
}