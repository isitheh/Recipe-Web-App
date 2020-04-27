package com.example.gamasg.recipe.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity //Let JPA know to build a table on the DB for this class
@Table(name="category")
@Data
public class Category {
	@Id //Primary key
	private Long id;
	
	@NotNull
	//Vegan, Vegeterian, Halal, etc..
	private String name;
}
