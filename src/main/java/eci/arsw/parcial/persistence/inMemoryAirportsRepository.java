package eci.arsw.parcial.persistence;

import java.io.IOException;



public interface inMemoryAirportsRepository {
	public String getAirportsByCity(String city) throws IOException;
}
	
	
