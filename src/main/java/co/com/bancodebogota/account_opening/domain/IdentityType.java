package co.com.bancodebogota.account_opening.domain;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the identity_types database table.
 * 
 */
@Entity
@Table(name="identity_types")
@NamedQuery(name="IdentityType.findAll", query="SELECT i FROM IdentityType i")
public class IdentityType implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	private Integer id;

	private String name;

	public IdentityType() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

}