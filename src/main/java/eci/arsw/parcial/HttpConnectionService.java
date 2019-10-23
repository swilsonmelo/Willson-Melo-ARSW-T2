package eci.arsw.parcial;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import org.springframework.stereotype.Component;

@Component
public class HttpConnectionService {

    private static final String USER_AGENT = "Mozilla/5.0";


    public static String getHttpConnection(String city) throws IOException{
        String url = "https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=" + city;
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        con.setRequestMethod("GET");
        //con.setRequestProperty("User-Agent", USER_AGENT);
        con.addRequestProperty("x-rapidapi-host", "cometari-airportsfinder-v1.p.rapidapi.com");
        con.addRequestProperty("x-rapidapi-key", "3f3ba436e2mshe65d818a0931df4p148e49jsn81f8fdaa3e8f");
        
        
        
       
        //The following invocation perform the connection implicitly before getting the code
        int responseCode = con.getResponseCode();
        System.out.println("GET Response Code :: " + responseCode);
        
        if (responseCode == HttpURLConnection.HTTP_OK) { // success
            BufferedReader in = new BufferedReader(new InputStreamReader(
                    con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            // print result
            System.out.println(response.toString());
            return response.toString();
        } else {
            System.out.println("GET request not worked");
        }
        System.out.println("GET DONE");
        return null;
    }

}