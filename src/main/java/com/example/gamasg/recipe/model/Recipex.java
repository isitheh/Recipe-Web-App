package com.example.gamasg.recipe.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity //Let JPA know to build a table on the DB for this class
@Table(name="recipex")
@Data
//This is the main/current recipe class.
public class Recipex {
	@Id //Primary key
	private Long id;
	private String name;
	private String image;
	private String ingredients;	
	private String preparation;
	@OneToOne
	private Category category;
}
