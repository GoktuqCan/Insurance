package com.goktug.insurance.model;

public enum RiskType {

	BIKE(0), JEWELRY(1), ELECTRONICS(2), SPORTS(3);

	private int id;

	private RiskType(int id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public static RiskType getById(int id) {
		for (RiskType type : values()) {
			if (type.getId() == id) {
				return type;
			}
		}
		throw new IllegalArgumentException("Invalid id of RiskType");
	}
}
