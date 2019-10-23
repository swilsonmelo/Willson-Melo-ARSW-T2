package eci.arsw.parcial.services;

import java.io.IOException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import eci.arsw.parcial.persistence.inMemoryAirportsRepository;

@Service
public class AirPortsFinderServices {

	@Autowired
	inMemoryAirportsRepository repository;

	public String getHttpConnection(String city) {
		try {
			return repository.getAirportsByCity(city);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "error al buscar aeropuertos";
		}
		
	}

}