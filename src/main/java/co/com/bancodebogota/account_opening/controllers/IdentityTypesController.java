package co.com.bancodebogota.account_opening.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.com.bancodebogota.account_opening.domain.IdentityType;
import co.com.bancodebogota.account_opening.domain.repository.IdentityTypeRepository;

@RestController
@RequestMapping("/")
public class IdentityTypesController {

	@Autowired
	private IdentityTypeRepository identityTypeRepository;
	
	@RequestMapping("/identity_types")
	public Collection<IdentityType> getIdentityTyper() {
		return (Collection<IdentityType>) identityTypeRepository.findAll();
	}
}