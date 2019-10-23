package eci.arsw.parcial.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import eci.arsw.parcial.services.AirPortsFinderServices;



@RestController
@RequestMapping("airports")
public class Controller {

	@Autowired
	AirPortsFinderServices airPortsFinderServices;
	
	@GetMapping("/{city}")
	public ResponseEntity<?> getAirports(@PathVariable String city){
		try {
				
			return new ResponseEntity<>(airPortsFinderServices.getHttpConnection(city) ,  HttpStatus.ACCEPTED);
		} catch (Exception ex) {
			System.out.println("buscando");
			return new ResponseEntity<>("Error, no airports were found", HttpStatus.NOT_FOUND);
		}
	}
	
	
}