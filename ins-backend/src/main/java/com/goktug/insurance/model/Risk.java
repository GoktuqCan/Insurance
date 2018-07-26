package com.goktug.insurance.model;

public class Risk {

	private RiskType type;

	private int quantity;

	public Risk() {
	}

	public Risk(RiskType type, int quantity) {
		super();
		this.type = type;
		this.quantity = quantity;
	}

	public RiskType getType() {
		return type;
	}

	public void setType(RiskType type) {
		this.type = type;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

}
