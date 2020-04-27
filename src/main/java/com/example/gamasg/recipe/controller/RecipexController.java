package com.example.gamasg.recipe.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.gamasg.recipe.model.Recipex;
import com.example.gamasg.recipe.repository.RecipexRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class RecipexController {
	private RecipexRepository recipexRepository;
	
	public RecipexController(RecipexRepository recipexRepository) {
		super();
		this.recipexRepository = recipexRepository;
	}
	
	@GetMapping("/recipes")
	Collection<Recipex> recipes() {
		//Equivalent to select * from recipex
		return recipexRepository.findAll();
	}
	
	@GetMapping("/recipex/{id}")
	ResponseEntity<?> getRecipex(@PathVariable Long id) {
		Optional<Recipex> recipex = recipexRepository.findById(id);
		return recipex.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
 	}
	
	@PostMapping("/recipex")
	ResponseEntity<Recipex> createRecipex(@Valid @RequestBody Recipex recipex) throws URISyntaxException {
		Recipex result = recipexRepository.save(recipex);
		return ResponseEntity.created(new URI("/api/recipex" + result.getId())).body(result);
	}
	
	@PutMapping("/recipex/{id}")
	ResponseEntity<Recipex> updateRecipex(@Valid @RequestBody Recipex recipex) {
		Recipex result = recipexRepository.save(recipex);
		return ResponseEntity.ok().body(result);
	}
	
	@DeleteMapping("/recipex/{id}")
	ResponseEntity<?> deleteRecipex(@PathVariable Long id) {
		recipexRepository.deleteById(id);
		return ResponseEntity.ok().build();
	}
}
